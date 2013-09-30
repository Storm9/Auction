/* View */

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    "models/AuctionItem"
], function ($, _, Backbone, JST) {
    'use strict';

    el: "#auctionItem",
    
    var AuctionItem = Backbone.View.extend({
        template: JST['app/scripts/templates/AuctionItem.ejs']
    });


    return AuctionItem;
});