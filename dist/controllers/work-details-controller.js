(function() {
  'use strict';

  function WorkDetailsController(worksService, $routeParams, $timeout) {
    var vm = this;
    var id = $routeParams.workid;

    vm.currentWork = worksService.getWorkById(id);

    vm.showWork = false;
    $timeout(function() {
      vm.showWork = true;
    }, 500);
  }

  angular.module('kalinaApp.controllers')
    .controller('WorkDetailsController', ['worksService', '$routeParams', '$timeout', WorkDetailsController]);
}());
