/**
 * Vérifie que la chaine n'est pas nulle ou vide
 * @module ui-components/validators/not-empty-validator
 */

"use strict";

module.exports = function (str) {
    return str !== null && typeof str !== "undefined" && str.length > 0;
};
