  (function() {
      'use strict';

      angular
          .module('app.layout')
          .component('cinemaPicker', {
              bindings: {
                  cinemas: '='
              },
              controller: cinemaPickerController,
              templateUrl: 'app/layout/components/cinemaPicker.html'
          });

  })();

  /**
  Cinemas object is a dictionary of the cinemas passed by the controller, each key is a cinema and
  it's value is either true or false. This object is mapped directly to a list of checkboxes.
  */
  cinemaPickerController.$inject = ['$scope'];
  function cinemaPickerController($scope) {
      var dtc = this;
      dtc.date = {}
      dtc.date.today = new Date();
      dtc.pkdt = dtc.date.today;
      dtc.date.dateOptions = $scope.dateOptions;


      $scope.dateOptions = {
          dateDisabled: disabled,
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
          dtc.date.opened = true;
      };

      $scope.setDate = function(year, month, day) {
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
