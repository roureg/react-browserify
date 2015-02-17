/**
 * Composant React pour l'affichage d'une liste de commentaires
 *
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    Commentary = require("./commentary");

var CommentList = React.createClass({
    getDefaultProps: function() {
        return {
            title: "All Comments"
        };
    },

    getComments: function() {
        if(!!this.props.comments && this.props.comments.length > 0) {
            return this.props.comments.map(function(comment, index) {
                return <Commentary key={index} comment={comment} />;
            });
        } else {
            return "No comments";
        }
    },

    render: function() {
        return (
            <div className="commentList">
                <h1>{this.props.title}</h1>
                <div className="comments">
                    {this.getComments()}
                </div>
            </div>
        );
    }
});

module.exports = CommentList;
