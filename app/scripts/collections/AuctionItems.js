define([
    'underscore',
    'backbone',
    'models/AuctionItem'
], function (_, Backbone, AuctionItem) {
    'use strict';

    var AuctionItems = Backbone.Collection.extend({
        model: AuctionItem
    });

    return AuctionItems;
});