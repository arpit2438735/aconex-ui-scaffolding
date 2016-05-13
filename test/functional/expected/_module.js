(function( angular ) {
    'use strict';

    /**
     * @ngdoc overview
     * @name test
     * @description
     * # test
     *
     * Main module of the application.
     */
    angular.module('test.controllers', []);
    angular.module('test.services', []);
    angular.module('test.directives', ['test.templates']);

    angular.module('test', []);

})( this.angular );
