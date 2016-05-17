(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('movieService', movieService);

    movieService.$inject = ['$localStorage', '$timeout', '$http', '$q', 'exception', 'logger'];

    function movieService($localStorage, $timeout, $http, $q, exception, logger) {
        var lastSearchParams = {};
        var service = {
            getMovieByName: getMovieByName,
            getSearchParams: getSearchParams,
            searchMovies: searchMovies,
        };

        activate(); //This should be preserved in session (since factory is singleton) so, should be removed in production
        return service;

        function activate() {
            if ($localStorage.lastSearchParams) {
                lastSearchParams = $localStorage.lastSearchParams;
            }
        }


        /**
         * Gets a movie info from the server. First 'searchMovies' has to be called with search params so this function
         * can access the date that we are interested in and the cinemas
         * @param   {string} name The name of the movie
         * @returns {object} The promise for an object representing the movie or an empty one if none is found.
         */
        function getMovieByName(name) {
            //http use lastSearchParams to get date, cinemas and use name param to get movies name
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve({
                    name: 'moviex',
                    photo: 'https://unsplash.it/400/180/?random',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, provident.',
                    duration: '2:30',
                    shows: [{
                        cinema: 'ccm san pedro',
                        hours: ['12:00 PM', '1:30 PM', '8:00 PM']
                    }, {
                        cinema: 'terramall',
                        hours: ['8:00 AM', '9:30 AM', '10:00 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM']
                    }, {

                        cinema: 'potato',
                        hours: ['12:00 PM', '1:30 PM', '8:00 PM']
                    }, {
                        cinema: 'lincon',
                        hours: ['8:00 AM', '9:30 AM', '10:00 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM']
                    }, ]
                });
            }, 1000);
            return deferred.promise;
        }

        /**
         * Returns the last search params used to get movies
         * @returns {Object} An object representing the last search params
         */
        function getSearchParams() {
            return lastSearchParams;
        }

        /**
         * Helper Function:
         * Returns an array containing the cinema objects where selected is true
         * @param   {Array} cinemas Array of Cinema{} with property 'selected'
         * @returns {Array} An array of the cinema{} where 'selected' is true
         */
        function filterSelectedCinemas(cinemas) {
            return cinemas.filter(function(cinema) {
                return cinema.selected;
            });
        }

        /**
         * Makes search request on the server with searchParams
         * @param   {object} searchParams : {Date(date), [cinemas], Int(Hour Interval)}
         * @returns {Array} Promise for a [{movie}] corresponding to searchParams
         */
        function searchMovies(searchParams) {
            lastSearchParams = $localStorage.lastSearchParams = searchParams;
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve([{
                    name: 'movie1',
                    photo: 'https://unsplash.it/300/180/?random',
                }, {
                    name: 'movie2',
                    photo: 'https://unsplash.it/200/180/?random',
                }, {
                    name: 'movie3',
                    photo: 'https://unsplash.it/300/180/?random',
                }, {
                    name: 'movie4',
                    photo: 'https://unsplash.it/250/180/?random',
                }, {
                    name: 'movie5',
                    photo: 'https://unsplash.it/400/180/?random',
                }, ]);
            }, 1000);
            return deferred.promise;
        }
    }
})();
