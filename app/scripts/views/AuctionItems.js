/* View */

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AuctionItems = Backbone.View.extend({
        template: JST['app/scripts/templates/AuctionItems.ejs']
    });

    return AuctionItems
});