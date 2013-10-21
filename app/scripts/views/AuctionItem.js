define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    "models/AuctionItem"
], function ($, _, Backbone, JST) {
    'use strict';

    var AuctionItem = Backbone.View.extend({

        template: JST['app/scripts/templates/AuctionItem.ejs'],

        el: "#auctionItem",

        initialize: function(){
            this.render();
        },

        render: function(){
            $(this.el).html(this.template({
                itemName: "Apple iPhone 5s 16GB",
                currentBidPrice: "124.88",
                highestBidderName: "Penny Pritzker",
                itemDescription: "Brand new Gold 16gb. Gold iPhone 5s"
            }));
        }
    })

    return AuctionItem;
});