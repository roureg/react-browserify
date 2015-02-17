/**
 * Script pour la page blog.html
 *
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    domReady = require("domready"),
    localStore = require('local-storage'),
    CommentList = require("../ui-component/comments/comment-list"),
    CommentForm  = require("../ui-component/forms/comment-form/form");

domReady(function () {
    var comments = JSON.parse(localStore.get("comments"));

    React.render(
        <CommentList comments={comments} />,
        document.getElementById('comments')
    );

    React.render(
        <CommentForm />,
        document.getElementById('comment-form')
    );
});







