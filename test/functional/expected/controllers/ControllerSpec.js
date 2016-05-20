(function(angular) {
    'use strict';

    var controller;

    describe('testController', function() {

        beforeEach(function() {
            angular.mock.module('acx.test.controllers', function() {

        });

        beforeEach(inject(function($controller) {
            controller = $controller('testController');
        }));

    });

})(this.angular);