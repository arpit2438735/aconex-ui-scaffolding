(function(angular) {
    'use strict';

    class fooController {
        constructor() {
        }
    }

    fooController.$inject = [];

    function foo() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: 'test/output/directive/foo.tpl.html',
            controller: 'fooController',
            controllerAs: 'vm'
        };
    }

    angular.module('acx.directives')
        .controller('fooController', fooController)
        .directive('foo', foo);
})(this.angular);
