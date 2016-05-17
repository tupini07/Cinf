  (function () {
    'use strict';

    angular
      .module('app.movies')
      .component('movieRes', {
        bindings: {
          movie: '<'
        },
        templateUrl: 'app/movies/components/movieRes.html'
      });

  })();