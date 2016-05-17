  (function () {
    'use strict';

    angular
      .module('app.layout')
      .component('datePicker', {
        bindings: {
          pkdt: '='
        },
        controller: datePickerController,
        templateUrl: 'app/layout/components/datePicker.html'
      });

  })();

  /**
  Various configurations for the DatePicker popup. The 'pkdt' is a Date Javascript object.
  */
  datePickerController.$inject = ['$scope'];

  function datePickerController($scope) {
    var dtc = this;
    dtc.date = {}
    dtc.date.today = new Date();
    dtc.pkdt = dtc.date.today;
    dtc.date.dateOptions = $scope.dateOptions;

    activate();

    function activate() {

      /** DatePicker comes from ui.bootstrap module and requires the initialization below**/
      $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1,
      };
      $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(), //Today is min-date
        showWeeks: true
      };

      $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      };

      $scope.open = function () {
        dtc.date.opened = true;
      };

      $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];


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

  }