(function () {
  'use strict';

  angular
    .module('app.movies')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: '/',
        config: {
          url: '/',
          templateUrl: 'app/movies/movieSearch.html',
          title: 'Movie Search'
        }
      },
      {
        state: '/movieDetail',
        config: {
          url: '/movieDetail/:movieName',
          templateUrl: 'app/movies/movieDetail.html',
          title: 'Movie Detail'
        },
      },
    ];
  }
})();