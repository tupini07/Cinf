(function () {
  'use strict';

  /**
  Takes a 2 attributes,
    'lable' is the title that is displayed abode this component
    'obj-list' is the array of object we want to create a checklistpicker for
    'keyName' is the name in the object structure that represents the text we want next to each checkbox
    'selectedName' is the name in the object structure that represents the selected state
  */
  angular
    .module('app.layout')
    .component('checkboxPicker', {
      bindings: {
        objList: '=',
        lable: '@',
        keyName: '@',
        selectedName: '@',
      },
      controller: checkboxPickerController,
      templateUrl: 'app/layout/components/checkboxPicker.html',
    });
    function checkboxPickerController(){
      var vm = this;
      vm.setAll = setAll;

      function setAll(val){
        for(var objv in vm.objList){
          vm.objList[objv][vm.selectedName] = val;
        }
      }

    }
})();
