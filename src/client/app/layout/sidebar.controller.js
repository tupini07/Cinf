(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    /* @ngInject */
    function SidebarController($scope) {
        var vm = this;

        activate();

        function activate() {}

    }
})();
