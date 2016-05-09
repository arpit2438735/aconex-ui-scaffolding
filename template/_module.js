(function( angular ) {
    'use strict';

    /**
     * @ngdoc overview
     * @name <%= templateName %>
     * @description
     * # <%= templateName %>
     *
     * Main module of the application.
     */
    angular.module('<%= templateName %>.controllers', []);
    angular.module('<%= templateName %>.services', []);
    angular.module('<%= templateName %>.directives', ['<%= templateName %>.templates']);

    angular.module('<%= templateName %>', []);

})( this.angular );
