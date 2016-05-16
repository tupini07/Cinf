(function () {
  'use strict';

  angular
    .module('app.movies')
    .controller('MovieDetailController', MovieDetailController);

  MovieDetailController.$inject = ['$stateParams', 'movieService']

  function MovieDetailController($stateParams, movieService) {
    var mDetail = this;
    mDetail.movie = {};

    activate();

    function activate() {
      movieService.getMovieByName($stateParams.movieName).then(function (movie) {
        mDetail.movie = movie;
      }, function (error) {
        console.log('Error: ' + error);
      });
    }
  }
})();