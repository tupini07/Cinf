  (function() {
      'use strict';

      angular
          .module('app.layout')
          .component('datePicker', {
              //templateUrl: 'datePicker.html',
              template: '<span>asdasD</span>'
              controller: datePickerController,
              controllerAs: 'vm',
              bindings: {
                  date: '='
              }
          });

  })();

datePickerController.$inject = ['$scope'];
function datePickerController($scope){
  var vm = this;
  vm.date = {}
  vm.date.today = new Date();
  vm.date.dt = vm.date.today;
  vm.date.dateOptions = $scope.dateOptions;


  $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
  };
  $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
      var date = data.date,
          mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.open = function() {
      vm.date.opened = true;
  };

  $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
      opened: false
  };

  $scope.popup2 = {
      opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [{
      date: tomorrow,
      status: 'full'
  }, {
      date: afterTomorrow,
      status: 'partially'
  }];

  function getDayClass(data) {
      var date = data.date,
          mode = data.mode;
      if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

          for (var i = 0; i < $scope.events.length; i++) {
              var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

              if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
              }
          }
      }

      return '';
  }
}
