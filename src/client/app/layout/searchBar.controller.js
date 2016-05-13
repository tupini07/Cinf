(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SearchBarController', SearchBarController);

    SearchBarController.$inject = ['$rootScope', 'cinemaService', 'movieService']

    function SearchBarController($rootScope, cinemaService, movieService) {
        var vm = this;
        vm.date = new Date();
        vm.cinemas = cinemaService.getCinemas();
        vm.doSearch = doSearch;

        // TODO Pointless... For the moment we will leave it but it makes no sense to display the movies
        // in the searchbar and in the search content.\\\
        vm.movies = movieService.getMovies(vm.date, vm.cinemas);

        activate();

        function activate() {}

        function doSearch() {
            //Starts a search on the moviesearch service and broadcasts it's promise which is caught
            //by the 'searchContController'
            $rootScope.$broadcast('searchRequested', movieService.getMoviesPromise());
        }
    }
})();
