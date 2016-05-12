(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['cinemaservice','movieservice']
    function SidebarController(cinemaservice,movieservice) {
        var vm = this;
        vm.date = new Date();
        vm.cinemas = cinemaservice.getCinemas();
        vm.movies = movieservice.getMovies(vm.date, vm.cinemas);

        vm.doSearch = doSearch;

        activate();

        function activate() {}
        function doSearch(){
          throw "Not implemented";
        }
    }
})();
