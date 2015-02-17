/**
 * Valide le format d'email
 * @module ui-components/validators/email-validator
 */

"use strict";

module.exports = {
    format: function (email) {
        return /[^@]+@[^.]+\..+/.test(email);
    }
};
