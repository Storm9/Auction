define([
    'jquery',
    'backbone',
    'models/AuctionItem',
    'views/AuctionItem',
    'collections/AuctionItems'
], function ($, Backbone, Model, View, Collection) {
    'use strict';

    var MobileRouter = Backbone.Router.extend({
        routes: {
            "index/:page": "index"
        },

    	initialize: function() {
    	},

        index: function(el){
        	new View();
        }

    });

    return MobileRouter;
});