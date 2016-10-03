(function() {
  'use strict';

  function SearchController(worksService, $routeParams, $location) {
    var vm = this;
    var searchText = $routeParams.text;

    vm.works = worksService.getWorksBySearch(searchText);
    if (vm.works.length > 0) {
      vm.hasWorks = true;
    } else {
      vm.hasWorks = false;
    }

    vm.loadWork = function (workId) {
      $location.path('/workdetails/' + workId);
    };
  }

  angular.module('kalinaApp.controllers')
    .controller('SearchController', ['worksService', '$routeParams', '$location', SearchController]);
}());