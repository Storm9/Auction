/* Collection */

define([
    'underscore',
    'backbone',
    'models/AuctionItem'
], function (_, Backbone, AuctionItem) {
    'use strict';

    var AucdtionItems = Backbone.Collection.extend({
        model: AuctionItem;
    });

    return Auctionitems;
});