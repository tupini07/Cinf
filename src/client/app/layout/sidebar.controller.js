(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', 'cinemaservice', 'movieservice']

    function SidebarController($rootScope, cinemaservice, movieservice) {
        var vm = this;
        vm.date = new Date();
        vm.cinemas = cinemaservice.getCinemas();
        vm.movies = movieservice.getMovies(vm.date, vm.cinemas);
        vm.doSearch = doSearch;

        activate();

        function activate() {}

        function doSearch() {
            $rootScope.$broadcast('searchStarted', {
                date: vm.date,
                cinemas: vm.cinemas.filter(filterChbx),
                movies: vm.movies.filter(filterChbx)
            });
            $rootScope.$broadcast('searchFinished', 'TODO searchFinished Event');

            function filterChbx(ob) {
                return ob.selected;
            }
        }
    }
})();
