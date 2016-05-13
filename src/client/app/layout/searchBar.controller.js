(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SearchBarController', SearchBarController);

    SearchBarController.$inject = ['$rootScope', '$state', '$scope', 'cinemaService', 'movieService']
    function SearchBarController($rootScope, $state, $scope, cinemaService, movieService) {
        var vm = this;
        vm.date = new Date();
        vm.cinemas = cinemaService.getCinemas();
        vm.doSearch = doSearch;
        vm.currentState = $state.current.name;

        // TODO Pointless... For the moment we will leave it but it makes no sense to display the movies
        // in the searchbar and in the search content.\\\
        vm.movies = movieService.getMovies(vm.date, vm.cinemas);


        activate();

        function activate() {
            var stateChangedLstner = $scope.$on('$stateChangeSuccess', function(subsData, newState) {
              vm.currentState =  newState.name;
            });

            //unsubscribe from event
            $scope.$on('$destroy', function() {
                stateChangedLstner();
            });
        }

        function doSearch() {
          
            //Starts a search on the moviesearch service and broadcasts it's promise which is caught
            //by the 'searchContController'
            $rootScope.$broadcast('searchRequested', movieService.getMoviesPromise());
        }
    }
})();
