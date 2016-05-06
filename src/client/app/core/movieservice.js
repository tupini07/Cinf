(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('movieservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getMovies: getMovies,
      getMovieDetail: getMovieDetail
    };

    return service;

    function getMovieDetail() { return $q.when(72); }

    function getMovies() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getMovies')(e);
      }
    }
  }
})();
