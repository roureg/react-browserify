/**
 * Composant React pour l'affichage d'un commentaire
 *
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    markdown = require("markdown").markdown;

var Commentary = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.comment.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: markdown.toHTML(this.props.comment.text)}} />
            </div>
        );
    }
});

module.exports = Commentary;
