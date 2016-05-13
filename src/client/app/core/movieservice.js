(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('movieService', movieService);

    movieService.$inject = ['$timeout', '$http', '$q', 'exception', 'logger'];
    function movieService($timeout, $http, $q, exception, logger) {
        var service = {
            getMovies: getMovies,
            getMovieDetail: getMovieDetail,
            getMoviesPromise: getMoviesPromise
        };

        return service;

        function getMovieDetail() {
            return $q.when(72);
        }

        function getMoviesPromise(searchParams) {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(getMovies(0,[]));
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
                img: 'img1.jpg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
                selected: true
            }, {
                name: 'movie2',
                img: 'img2.jpg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
                selected: true
            }, {
                name: 'movie3',
                img: 'img3.jpg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
                selected: true
            }, {
                name: 'movie4',
                img: 'img4.jpg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam architecto fugiat eveniet velit sed adipisci nisi dolorem consectetur ipsum sunt!',
                selected: true
            }, {
                name: 'movie5',
                img: 'img5.jpg',
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
            return cinemas.filter(function(cinema) {
                return cinema.selected;
            });
        }
    }
})();
