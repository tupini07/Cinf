(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('movieService', movieService);

  movieService.$inject = ['$timeout', '$http', '$q', 'exception', 'logger'];

  function movieService($timeout, $http, $q, exception, logger) {
    var service = {
      getMovies: getMovies,
      getMovieDetail: getMovieDetail,
      getMoviesPromise: getMoviesPromise,
      getMovieByName: getMovieByName,
    };

    return service;

    function getMovieByName(name) {
      var deferred = $q.defer();
      $timeout(function () {
        deferred.resolve({
          name: 'moviex',
          photo: 'https://unsplash.it/400/180/?random',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, provident.',
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

    function getMovieDetail() {
      return $q.when(72);
    }

    /*
    Returns a promise of a movie list that corresponds to the searchParams.
    'searchParams': {date: Date, cinemas:[{}], timeInterval: [] }
    */
    function getMoviesPromise(searchParams) {
      var deferred = $q.defer();
      $timeout(function () {
        deferred.resolve(getMovies(0, []));
      }, 1000);
      return deferred.promise;
    }

    /**
    Gets the movies that are being played on the specified date and on the specified cinemas.
    'date' is a date object
    'cinemas' is an array of the cinemas we want to search in
    returns (for the moment) an array of movie objects {name, img_url, description}
    */
    function getMovies(date, cinemas) {
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

    /**
    Returns an array containing the cinema objects where selected is true
    'cinemas' [{name,selected}]
    */
    function filterSelectedCinemas(cinemas) {
      return cinemas.filter(function (cinema) {
        return cinema.selected;
      });
    }
  }
})();