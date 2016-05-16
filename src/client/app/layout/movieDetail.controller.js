(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['$stateParams']
    function MovieDetailController($stateParams) {
        var vm = this;
        vm.movieName = $stateParams.movieName
    }
})();
