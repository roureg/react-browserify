/**
 * Composant React : Fromulaire de commentaire
 *
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    localStore = require('local-storage'),
    TextArea = require("../field-textarea/field");

var CommentForm = React.createClass({

    getInitialState: function () {
        return {
            isValidComment: false
        };
    },

    onInputComment: function (isValid) {
        this.setState({
            isValidComment: isValid
        });
    },

    storeComment: function() {
        var newComments =  [{author: localStore.get("email"), text: this.refs.comment.getDOMNode().value}];
        var comments = JSON.parse(localStore.get("comments"));
        if(!!comments) {
            newComments = newComments.concat(comments);
        }
        localStore.set("comments", JSON.stringify(newComments));
    },

    isValidForm: function() {
        return this.state.isValidComment;
    },

    render: function () {

        return (
            <div>
                <h2>Add a new comment</h2>
                <form method="get" noValidate ref="comment-form" onSubmit={this.storeComment}>
                    <TextArea ref="comment" htmlName="comment" onInput={this.onInputComment} />
                    <p>
                        <input type="submit" value="Post Comment" disabled={!this.isValidForm()} />
                    </p>
                </form>
            </div>
        );
    }
});

module.exports = CommentForm;
