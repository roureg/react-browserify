var gulp = require("gulp"),
    browserify = require("browserify"),
    fs = require("fs"),
    glob = require("glob"),
    gutil = require("gulp-util"),
    path = require("path"),
    watchify = require("watchify"),
    jshint = require("gulp-jshint"),
    react = require("gulp-react");


// -----------------------------------------------------------------------------
// GLOBAL VARS & FUNCTIONS
// -----------------------------------------------------------------------------
var PRODUCTION = true;

var JS_SRC_FILES = ["./ui-component/**/*.js", "./pages/**/*.js"];
var JS_DST_DIR = path.resolve("../webapp/js");

// Helper function to execute a function on files passing through the stream
function onStreamError(arg) {
    if (arg) {
        console.log(arg.toString());
        if (this.emit) {
            this.emit("end");
        }
    }
}

function removeFilesSync(srcArgs) {
    glob.sync(srcArgs).forEach(function (file) {
        console.log("  Delete: " + file);
        fs.unlinkSync(file);
    });
}

function lint(files) {
    return gulp.src(files)
        .pipe(react())
        .pipe(jshint())
        .pipe(jshint.reporter("default", {verbose: true}))
        .pipe(jshint.reporter("fail"));
}

// -----------------------------------------------------------------------------
// JAVASCRIPT
// -----------------------------------------------------------------------------
var BROWSERIFY_ARGS = { cache: {}, packageCache: {}, fullPaths: true};

// CLEAN JS
gulp.task("clean-js", function (done) {
    removeFilesSync(JS_DST_DIR + "/*.js");
    done();
});

// LINT JS
gulp.task("lint-js", function(done) {
    lint(JS_SRC_FILES);
    done();
});

// BUILD JS
function minifyBundle(bundle) {
    if (PRODUCTION) {
        console.log("JS Minification");
        bundle.plugin('minifyify', {map: false, minify: PRODUCTION});
    }
    return bundle;
}

function browserifyPages() {
    var pages = fs.readdirSync("./pages");

    var b = browserify(pages.map(function (p) {
        return "./pages/" + p;
    }), BROWSERIFY_ARGS);

    b = minifyBundle(b);
    return b.plugin("factor-bundle", {outputs: pages.map(function (p) {
            return JS_DST_DIR + "/" + p;
        })});
}

function bundlePages(browserified) {
    return browserified.bundle()
            .on("error", onStreamError)
            .pipe(fs.createWriteStream(JS_DST_DIR + "/pages-common.js"));
}

function watchJsPages() {
    var browserified = browserifyPages();
    var w = watchify(browserified);

    bundlePages(browserified);

    w.on("update", function (files) {
        lint(files).on("error", onStreamError);
        bundlePages(browserified);
    });

    w.on("time", function (time) {
        gutil.log("Regenerated files in", gutil.colors.magenta(time / 1000 + " s"));
    });
}

gulp.task("build-js", ["lint-js", "clean-js"], function() {
    return bundlePages(browserifyPages());
});
gulp.task("watch-js", ["lint-js", "clean-js"], function() {
    watchJsPages();
});