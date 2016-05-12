(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['cinemaservice']
    function SidebarController(cinemaservice) {
        var vm = this;
        vm.cinemas = cinemaservice.getCinemas();
        vm.date = new Date();
        vm.doSearch = doSearch;
        vm.s = "asas";
        activate();

        function activate() {}
        function doSearch(){

        }
    }
})();
