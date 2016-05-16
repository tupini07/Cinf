(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SearchContentController', SearchContentController);

    SearchContentController.$inject = ['$scope']

    function SearchContentController($scope) {
        var vm = this;
        vm.status = 0; //0: no data, 1: Searching, 2:Data found, 3:error
        vm.movies = [];


        activate();

        function activate() {

            //recieves a promise of the movie search
            var searchRequestedListener = $scope.$on('searchRequested', function(subsData, promise) {
                vm.status = 1;
                //result is the movies we searched for
                promise.then(function(result) {
                        vm.movies = result;
                        vm.status = 2;
                    },
                    function(failedReason) {
                        console.log('Promise Failed because: ' + failedReason);
                        vm.movies = [];
                        vm.status = 3;
                    });
            });

            //unsubscribe from event
            $scope.$on('$destroy', function() {
                searchRequestedListener();
            });
        }
    }
})();
