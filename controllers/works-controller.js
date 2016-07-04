(function() {
    'use strict';

    function WorksController(posts, $routeParams) {
        var vm = this;
        var currentId = $routeParams.text;

        
    }

    angular.module('kalinaApp.controllers')
        .controller('WorksController', ['$routeParams', WorksController]);
}());
