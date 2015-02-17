/**
 * Script pour la page index.html
 *
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    domReady = require("domready"),
    localStore = require('local-storage'),
    CommentList = require("../ui-component/comments/comment-list"),
    LoginForm = require("../ui-component/forms/login-form/form");

domReady(function () {

    var comments = JSON.parse(localStore.get("comments"));
    if(!!comments) {
        comments = comments.slice(0,3);
    }

    React.render(
        <CommentList comments={comments} title="Last Comments" />,
        document.getElementById('comments')
    );

    React.render(
        <LoginForm />,
        document.getElementById('login-form')
    );

});







