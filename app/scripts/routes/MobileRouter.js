/*global define*/

define([
    'jquery',
    'backbone',
    'models/AuctionItem',
    'views/AuctionItem',
    'collections/AuctionItems'
], function ($, Backbone, Model, View, Collection) {
    'use strict';

    var MobileRouter = Backbone.Router.extend({

    	initialize: function() {
    		Backbone.history.start();
    	}
        routes: {
        	"":"index"
        }

        index: function(){
        	new View();
        }

    });

    return MobileRouter;
});