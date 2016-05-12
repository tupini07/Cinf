(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ContentSearchController', ContentSearchController);

    ContentSearchController.$inject = ['$rootScope']
    function ContentSearchController($rootScope) {
        var vm = this;

        $rootScope.$on('pop', function(dat){
          console.log('pop!');
          console.log(dat);
        });
        activate();

        function activate() {}
    }
})();
