(function() {
    'use strict';

    function WorksController(worksService, $routeParams) {
        var vm = this;
        var currentCategory = $routeParams.category;
        vm.works = worksService.getWorksByCategory(currentCategory);
    }

    angular.module('kalinaApp.controllers')
        .controller('WorksController', ['worksService', '$routeParams', WorksController]);
}());
