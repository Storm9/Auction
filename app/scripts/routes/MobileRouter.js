define([
    'jquery',
    'backbone',
    'models/AuctionItem',
    'views/AuctionItems',
    'views/AuctionItem',
    'collections/AuctionItems'
], function ($, Backbone, Model, AuctionItemsView, AuctionItemView) {
    'use strict';

    var MobileRouter = Backbone.Router.extend({
        routes: {
            "currentAuctions": "show",
            "index/:page": "index"
        },

    	initialize: function() {
    	},

        show:function(){
            console.log("show called");
            new AuctionItemsView();
        },

        index: function(el){
        	new AuctionItemView();
        }

    });

    return MobileRouter;
});