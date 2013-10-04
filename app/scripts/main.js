/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'routes/MobileRouter'
], function (Backbone, MobileRouter) {
    var url = document.URL;
    var hashIndex = url.indexOf('#');
    var pageUrl = (hashIndex >= 0) ? url.substring( hashIndex ) : '#';

    Backbone.history.start();
//    Backbone.history.start({ pushState: true});

    var router = new MobileRouter();
    router.navigate( pageUrl, {trigger: true} );
});
