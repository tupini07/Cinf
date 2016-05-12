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
      controller: checkboxPickerController,
      templateUrl: 'app/layout/components/checkboxPicker.html',
    });
    function checkboxPickerController(){
      var vm = this;
      vm.setAll = setAll;

      function setAll(val){
        console.log(vm.objList);
        for(var k in vm.objList){
          vm.objList[k] = val;
        }
        console.log(vm.objList);
      }

    }
})();
