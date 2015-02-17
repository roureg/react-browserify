/**
 * Composant React pour un champ password
 *
 * @module ui-components/forms/field-password
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    notEmptyValidator = require("../validators/not-empty-validator");

var Password = React.createClass({

    validate: function (e) {
        this.props.onInput(notEmptyValidator(e.target.value));
    },

    render: function () {
        return (
             <input onChange={this.validate}
                    placeholder="Mot de passe..."
                    ref="password"
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"/>
        );
    }

});

module.exports = Password;
