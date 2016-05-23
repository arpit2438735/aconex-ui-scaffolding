(function(angular) {
    'use strict';

    var controller;

    describe('<%= templateName %>Controller', function() {

        beforeEach(function() {
            angular.mock.module('acx.<%= templateName %>.controllers', function() {

        });

        beforeEach(inject(function($controller) {
            controller = $controller('<%= templateName %>Controller');
        }));

    });

})(this.angular);