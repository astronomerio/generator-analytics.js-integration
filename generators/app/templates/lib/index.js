'use strict';

/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');

/**
 * Expose `Kenshoo` integration.
 */

var <%= properName %> = module.exports = integration('<%= properName %>')
    .global('')
    .tag('');
    
/**
 * Initialize.
 *
 * Documentation:
 *
 * @api public
 */

<%= properName %>.prototype.initialize = function() {
    this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

<%= properName %>.prototype.loaded = function() {
    return true;
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

<%= properName %>.prototype.page = function(page) {

};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

<%= properName %>.prototype.identify = function(identify) {

};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

<%= properName %>.prototype.track = function(track) {

};

/**
 * Alias.
 *
 * @param {Alias} alias
 */

<%= properName %>.prototype.alias = function(alias) {

};
