(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    /* @ngInject */
    function SidebarController($scope) {
        var vm = this;
        vm.date = new Date();
        
        activate();

        function activate() {}

    }
})();
