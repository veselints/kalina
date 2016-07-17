(function() {
  'use strict';

  function SearchController(worksService, $routeParams) {
    var vm = this;
    var searchText = $routeParams.text;

    vm.works = worksService.getWorksBySearch(searchText);
    if (vm.works.length > 0) {
      vm.hasWorks = true;
    } else {
      vm.hasWorks = false;
    }
  }

  angular.module('kalinaApp.controllers')
    .controller('SearchController', ['worksService', '$routeParams', SearchController]);
}());