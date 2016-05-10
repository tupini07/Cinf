(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    /* @ngInject */
    function SidebarController($scope) {
        var vm = this;
        vm.cinemas = { //this is returned by a Cinema Service
            'cinepolis terramall': true,
            'multiplaza escazu': false,
            'ccm san pedro': false,
            'ccm LNP': true
        }
        vm.date = new Date();
        vm.doSearch = doSearch;
        
        activate();

        function activate() {}
        function doSearch(){

        }
    }
})();
