(function () {
  'use strict';

  /**
  Takes a 2 attributes,
    'obj-list' is a dictionary key:bool and displays a list of checkboxes based on it.
    'lable' is a string and is the title displayed above the checkboxPicker
  */
  angular
    .module('app.layout')
    .component('checkboxPicker', {
      bindings: {
        objList: '=',
        lable: '@'
      },
      templateUrl: 'app/layout/components/checkboxPicker.html'
    });

})();
