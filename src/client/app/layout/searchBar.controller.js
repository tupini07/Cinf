(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('SearchBarController', SearchBarController);

  SearchBarController.$inject = ['$rootScope', '$state', '$scope', 'cinemaService', 'movieService']

  function SearchBarController($rootScope, $state, $scope, cinemaService, movieService) {
    var vm = this;

    vm.cinemas = cinemaService.getCinemas();
    vm.currentState = $state.current.name;
    vm.date = new Date();
    vm.doSearch = doSearch;
    vm.slider = {};

    activate();

    function activate() {
      //create the time interval picker
      vm.slider = new Slider('#slider-interval', {});

      //Keep track of current state
      var stateChangedLstner = $scope.$on('$stateChangeSuccess', function (subsData, newState) {
        vm.currentState = newState.name;
      });

      //unsubscribe from event
      $scope.$on('$destroy', function () {
        stateChangedLstner();
      });
    }

    function doSearch() {
      var searchParams = {
        cinemas: vm.cinemas,
        date: vm.date,
        timeInterval: vm.slider.element.value.split(','), //[from:Int, to:Int]
      };

      //Starts a search on the moviesearch service and broadcasts it's promise which is caught
      //by the 'searchContController'
      /*****?
       This could be moved to the movieService so that the controller complies with the separation of concern principle but
       that in turn would mean that the service is responsable for broadcasting the message, which is not since this is just
       a special case between this controller and the movieSearch controller.
       In other words, it's the concern of this
       controller that the movieSearch controller gets informed of the search beign made.
      ******/
      $rootScope.$broadcast('searchRequested', movieService.searchMovies(searchParams));
    }
  }
})();
