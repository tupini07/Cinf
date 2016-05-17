(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('movieService', movieService);

  movieService.$inject = ['$timeout', '$http', '$q', 'exception', 'logger'];

  function movieService($timeout, $http, $q, exception, logger) {
    var service = {
      getMovieByName: getMovieByName,
      searchMovies: searchMovies,
    };
    return service;

    /**
     * Gets a movie info from the server
     * @param   {string} name The name of the movie 
     * @returns {object} The promise for an object representing the movie or an empty one if none is found.
     */
    function getMovieByName(name) {
      var deferred = $q.defer();
      $timeout(function () {
        deferred.resolve({
          name: 'moviex',
          photo: 'https://unsplash.it/400/180/?random',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, provident.',
          duration: '2:30',
          shows: [
            {
              cinema: 'ccm san pedro',
              hours: ['12:00 PM', '1:30 PM', '8:00 PM']
            },
            {
              cinema: 'terramall',
              hours: ['8:00 AM', '9:30 AM', '10:00 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM']
            }, {

              cinema: 'potato',
              hours: ['12:00 PM', '1:30 PM', '8:00 PM']
            },
            {
              cinema: 'lincon',
              hours: ['8:00 AM', '9:30 AM', '10:00 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM']
            },
          ]
        });
      }, 1000);
      return deferred.promise;
    }

    /**
     * Helper Function: 
     * Returns an array containing the cinema objects where selected is true
     * @param   {Array} cinemas Array of Cinema{} with property 'selected'
     * @returns {Array} An array of the cinema{} where 'selected' is true
     */
    function filterSelectedCinemas(cinemas) {
      return cinemas.filter(function (cinema) {
        return cinema.selected;
      });
    }

    /**
     * Makes search request on the server with searchParams
     * @param   {object} searchParams : {Date(date), [cinemas], Int(Hour Interval)}
     * @returns {Array} Promise for a [{movie}] corresponding to searchParams
     */
    function searchMovies(searchParams) {
      var deferred = $q.defer();
      $timeout(function () {
        deferred.resolve(getDummyMovies(0, []));
      }, 1000);
      return deferred.promise;
    }





    /**
    Dummy movies
    */
    function getDummyMovies(date, cinemas) {
      var fCinema = filterSelectedCinemas(cinemas);
      return [{
        name: 'movie1',
        img: 'https://unsplash.it/300/180/?random',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
        selected: true
            }, {
        name: 'movie2',
        img: 'https://unsplash.it/200/180/?random',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
        selected: true
            }, {
        name: 'movie3',
        img: 'https://unsplash.it/300/180/?random',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
        selected: true
            }, {
        name: 'movie4',
        img: 'https://unsplash.it/250/180/?random',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
        selected: true
            }, {
        name: 'movie5',
        img: 'https://unsplash.it/400/180/?random',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
        selected: true
            }, ];

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