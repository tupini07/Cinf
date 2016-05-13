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
        vm.doSearch = doSearch;

        // TODO Pointless... For the moment we will leave it but it makes no sense to display the movies
        // in the searchbar and in the search content.\\\
        vm.movies = movieservice.getMovies(vm.date, vm.cinemas);

        activate();

        function activate() {}

        function doSearch() {
            //Starts a search on the moviesearch service and broadcasts it's promise which is caught
            //by the 'contSearchController'
            $rootScope.$broadcast('searchRequested', movieservice.getMoviesPromise());
        }
    }
})();
