/**
 * Formulaire de de login
 *
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons"),
    localStore = require('local-storage'),
    Email = require("../field-email/field"),
    Password = require("../field-password/field");

var LoginForm = React.createClass({

    getInitialState: function () {
        return {
            isValidEmail: false,
            isValidPassword: false
        };
    },

    onInputPassword: function (isValid) {
        this.setState({
            isValidPassword: isValid
        });
    },

    onInputEmail: function (isValid) {
        this.setState({
            isValidEmail: isValid
        });
    },

    storeEmail: function() {
        console.log(this.refs);
        localStore.set("email", this.refs.email.getDOMNode().value);
    },

    isValidForm: function() {
        return this.state.isValidPassword && this.state.isValidEmail;
    },

    render: function () {

        return (
            <div>
                <form action="/blog.html" method="get" ref="login-form" noValidate className="login-form" onSubmit={this.storeEmail}>
                    <Email ref="email" onInput={this.onInputEmail} />
                    <Password ref="password" onInput={this.onInputPassword} />
                    <p>
                        <input type="submit" value="Se connecter" disabled={!this.isValidForm()} />
                    </p>
                </form>
            </div>
        );
    }
});

module.exports = LoginForm;
