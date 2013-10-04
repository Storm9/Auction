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
            $(this.el).append(this.template);
        }
    })

    return AuctionItem;
});