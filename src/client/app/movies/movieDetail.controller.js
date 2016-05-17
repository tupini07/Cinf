(function() {
    'use strict';

    angular
        .module('app.movies')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['$stateParams', 'movieService']

    function MovieDetailController($stateParams, movieService) {
        var mDetail = this;
        mDetail.movie = {};
        mDetail.loading = true;
        mDetail.sparams = {};

        mDetail.dateToLocale = dateToLocale;

        activate();

        function activate() {

            movieService.getMovieByName($stateParams.movieName).then(function(movie) {
                mDetail.movie = movie;
                mDetail.sparams = movieService.getSearchParams();
                console.log(mDetail.sparams);
                mDetail.loading = false;
            }, function(error) {
                console.log('Error: ' + error);
                mDetail.loading = false;
            });
        }

        /*
        * View helper function:
        * Returns a Date's date in locale string
        */
        function dateToLocale(date){
          //The DatePicker's component manages the date as a string and it needs to be converted
          //to Date obj for use here.
          return new Date(date).toLocaleDateString();
        }
    }
})();
