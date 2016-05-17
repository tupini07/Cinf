(function () {
  'use strict';

  angular
    .module('app.movies')
    .controller('MovieSearchController', MovieSearchController);

  MovieSearchController.$inject = ['$scope'];

  function MovieSearchController($scope) {
    var vm = this;
    vm.status = 'Waiting for search request';
    vm.movies = [];


    activate();

    function activate() {

      //recieves a promise of the movie search
      var searchRequestedListener = $scope.$on('searchRequested', function (subsData, promise) {
        vm.status = 'Searching';
        //result is the movies we searched for
        promise.then(function (result) {
            vm.movies = result;
            vm.status = 'Movies Found!';
          },
          function (failedReason) {
            console.log('Promise Failed because: ' + failedReason);
            vm.movies = [];
            vm.status = 'Error.';
          });
      });

      //unsubscribe from event
      $scope.$on('$destroy', function () {
        searchRequestedListener();
      });
    }
  }
})();