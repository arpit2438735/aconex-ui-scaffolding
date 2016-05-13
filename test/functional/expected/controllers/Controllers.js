(function( angular ) {
    'use strict';


    /**
     * @ngdoc function
     * @name test.controller
     * @description
     * # testCtrl
     * Controller of the test
     */
    class testController {
        constructor() {}
    }

    testController.$inject = [];

    angular
    .module('acx.test.controllers')
        .controller('testController', testController );

})( this.angular );