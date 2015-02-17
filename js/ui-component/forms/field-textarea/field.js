/**
 * Composant React pour un textarea
 *
 * @module ui-components/forms/field-textarea
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    notEmptyValidator = require("../validators/not-empty-validator");

var TextArea = React.createClass({
    getDefaultProps: function() {
        return {
            defaultValue: ''
        };
    },

    validate: function (e) {
        this.props.onInput(notEmptyValidator(e.target.value));
    },

    render: function () {
        return (
             <textarea onChange={this.validate} ref={this.props.htmlName} name={this.props.htmlName} defaultValue={this.props.defaultValue} />
        );
    }

});

module.exports = TextArea;
