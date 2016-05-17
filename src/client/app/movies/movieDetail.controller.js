(function () {
  'use strict';

  angular
    .module('app.movies')
    .controller('MovieDetailController', MovieDetailController);

  MovieDetailController.$inject = ['$stateParams', 'movieService']

  function MovieDetailController($stateParams, movieService) {
    var mDetail = this;
    mDetail.movie = {};
    mDetail.loading = true;

    activate();

    function activate() {
      movieService.getMovieByName($stateParams.movieName).then(function (movie) {
        mDetail.movie = movie;
        mDetail.loading = false;
      }, function (error) {
        console.log('Error: ' + error);
        mDetail.loading = false;
      });
    }
  }
})();