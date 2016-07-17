(function() {
  'use strict';

  function WorksController(worksService, $routeParams, $timeout) {
    var vm = this;
    var currentCategory = $routeParams.category;
    var index = 0;

    vm.works = worksService.getWorksByCategory(currentCategory);
    vm.currentWork = vm.works[index];
    vm.showWork = true;

    vm.openNext = function() {
      vm.showWork = false;
      if (index >= vm.works.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      vm.currentWork = vm.works[index];

      $timeout(function() {
        $timeout(function() {
          vm.showWork = true;
        }, 500);
      }, 1000);
    };

    vm.openPrev = function() {
      vm.showWork = false;
      if (index === 0) {
        index = vm.works.length - 1;
      } else {
        index -= 1;
      }
      vm.currentWork = vm.works[index];

      $timeout(function() {
        $timeout(function() {
          vm.showWork = true;
        }, 500);
      }, 1000);

    };
  }

  angular.module('kalinaApp.controllers')
    .controller('WorksController', ['worksService', '$routeParams', '$timeout', WorksController]);
}());
