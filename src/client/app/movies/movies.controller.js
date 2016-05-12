(function() {
  'use strict';

  angular
    .module('app.movies')
    .controller('moviesController', moviesController);

  moviesController.$inject = ['$q', 'movieservice', 'logger'];
  /* @ngInject */
  function moviesController($q, movieservice, logger) {
    var vm = this;
    vm.news = {
      title: 'cinef',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'movies';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated movies View');
      });
    }

    function getMessageCount() {
      return movieservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return movieservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();