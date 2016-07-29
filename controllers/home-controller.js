(function() {
  'use strict';

  function HomeController(worksService, $scope, $location, $interval, $timeout) {
    var vm = this;

    vm.showWork = false;
    var changedWork = worksService.getCurrentWork();
    vm.currentImageUrl = changedWork.url;
    vm.currentImageName = changedWork.name;
    vm.showWork = true;

    // I should check how to terminate this call when going to another controller
    var intervalPromise = $interval(function() {
      vm.showWork = false;
      var newWork = worksService.getCurrentWork();
      vm.currentImageUrl = newWork.url;
      vm.currentImageName = newWork.name;
      $timeout(function() {
        $timeout(function() {
          vm.showWork = true;
        }, 300);
      }, 1000);
    }, 7000);

    $scope.$on('$destroy', function() {
      $interval.cancel(intervalPromise);
    });
  }

  angular.module('kalinaApp.controllers')
    .controller('HomeController', ['worksService', '$scope', '$location', '$interval', '$timeout', HomeController]);
}());
