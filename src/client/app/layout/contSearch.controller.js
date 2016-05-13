(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ContentSearchController', ContentSearchController);

    ContentSearchController.$inject = ['$scope']

    function ContentSearchController($scope) {
        var vm = this;


        activate();

        function activate() {

            //recieves a promise of the movie search
            var searchRequestedListener = $scope.$on('searchRequested', function(subsData, promise) {
                //result is the movies we searched for
                promise.then(function(result) {
                      console.log(result);
                    },
                    function(failedReason) {
                      console.log('Promise Failed because: '+failedReason);
                    });
            });

            //unsubscribe from event
            $scope.$on('$destroy', function() {
                searchRequestedListener();
            });
        }
    }
})();
