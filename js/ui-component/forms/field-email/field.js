/**
 * Composant React pour un champ email
 *
 * @module ui-components/forms/field-email
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    notEmptyValidator = require("../validators/not-empty-validator"),
    emailValidator = require("../validators/email-validator");

var Email = React.createClass({

    validate: function (e) {
        this.props.onInput(notEmptyValidator(e.target.value) && emailValidator.format(e.target.value));
    },

    render: function () {

        return (
            <input  onChange={this.validate}
                    ref="email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Adresse e-mail..." />
        );
    }

});

module.exports = Email;
