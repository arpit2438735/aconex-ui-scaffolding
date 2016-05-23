(function( angular ) {
    'use strict';


    /**
     * @ngdoc function
     * @name <%= templateName %>.controller
     * @description
     * # <%= templateName %>Ctrl
     * Controller of the <%= templateName %>
     */
    class <%= templateName %>Controller {
        constructor() {}
    }

    <%= templateName %>Controller.$inject = [];

    angular
    .module('acx.<%= templateName %>.controllers')
        .controller('<%= templateName %>Controller', <%= templateName %>Controller );

})( this.angular );