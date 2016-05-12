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
            var sStartedListener = $scope.$on('searchStarted', function(subsData, param) {
                console.log(param);
            });
            var sFinishedListener = $scope.$on('searchFinished', function(subsData, param) {
                console.log(param);
            });

            //unsubscribe from event
            $scope.$on('$destroy', function() {
                sStartedListener();
                sFinishedListener();
            });
        }
    }
})();
