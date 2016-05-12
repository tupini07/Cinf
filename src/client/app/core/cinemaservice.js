(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('cinemaservice', cinemaservice);

  cinemaservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function cinemaservice($http, $q, exception, logger) {
    var service = {
      getCinemas: getCinemas
    };

    return service;

    function getCinemas(){
      return {
        'cinepolis terramall': true,
        'multiplaza escazu': false,
        'ccm san pedro': false,
        'ccm LNP': true
      }
    }

  }
})();
