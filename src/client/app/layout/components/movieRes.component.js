  (function() {
      'use strict';

      angular
          .module('app.layout')
          .component('movieRes', {
              bindings: {
                  movie: '<'
              },
              templateUrl: 'app/layout/components/movieRes.html'
          });

  })();
