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
      return [
        {name:'cinepolis terramall', value:true},
        {name:'multiplaza escazu', value:false},
        {name:'ccm san pedro', value:false},
        {name:'ccm LNP', value:true},
      ];
    }

  }
})();
