(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('cinemaService', cinemaService);

    cinemaService.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function cinemaService($http, $q, exception, logger) {
        var service = {
            getCinemas: getCinemas
        };

        return service;

        /**
         * Synchronously returns an array of cinemas
         * @returns {Array} Of cinema objects.
         */

        function getCinemas() {
            return [{
                name: 'cinepolis terramall',
                selected: true
            }, {
                name: 'multiplaza escazu',
                selected: false
            }, {
                name: 'ccm san pedro',
                selected: false
            }, {
                name: 'ccm LNP',
                selected: true
            }, ];
        }

    }
})();
