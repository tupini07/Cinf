(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  function appRun(routerHelper) {
    var otherwise = '/404';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.html',
          title: '404'
        }
      },
      {
        state: '/',
        config: {
          url: '/',
          templateUrl: 'app/layout/searchCont.html',
          title: 'Search'
        }
      },
      {
        state: '/movieDetail',
        config: {
          url: '/movieDetail/:movieName',
          templateUrl: 'app/layout/movieDetail.html',
          title: 'Movie Detail'
        }
      },

    ];
  }
})();
