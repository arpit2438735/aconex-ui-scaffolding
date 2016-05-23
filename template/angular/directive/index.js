(function(angular) {
    'use strict';

    class <%= templateName %>Controller {
        constructor() {
        }
    }

    <%= templateName %>Controller.$inject = [];

    function <%= templateName %>() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: '<%= directiveTemplatePath %>',
            controller: '<%= templateName %>Controller',
            controllerAs: 'vm'
        };
    }

    angular.module('acx.directives')
        .controller('<%= templateName %>Controller', <%= templateName %>Controller)
        .directive('<%= templateName %>', <%= templateName %>);
})(this.angular);
