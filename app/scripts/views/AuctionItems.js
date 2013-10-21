define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AuctionItems = Backbone.View.extend({
        template: JST['app/scripts/templates/AuctionItems.ejs'],

        el: "auctionItems",

        initialize: function(){
            console.log("in init");
            this.render();
        },

        render: function(){
            $(this.el).html(this.template());
        }

    });

    return AuctionItems
});