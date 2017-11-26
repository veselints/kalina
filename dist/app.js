(function() {
  'use strict';

  function config($routeProvider, $locationProvider) {
    var PARTIALS_PREFIX = '/views/partials/';
    var CONTROLLER_AS_VM = 'vm';

    $routeProvider
      .when('/', {
        templateUrl: PARTIALS_PREFIX + 'home.html',
        controller: 'HomeController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/works/:category', {
        templateUrl: PARTIALS_PREFIX + 'lightbox.html',
        controller: 'WorksController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/search/:text', {
        templateUrl: PARTIALS_PREFIX + 'works.html',
        controller: 'SearchController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/workdetails/:workid', {
        templateUrl: PARTIALS_PREFIX + 'workdetails.html',
        controller: 'WorkDetailsController',
        controllerAs: CONTROLLER_AS_VM
      })
      .when('/theprocess', {
        templateUrl: PARTIALS_PREFIX + 'process.html'
      })
      .when('/theartist', {
        templateUrl: PARTIALS_PREFIX + 'artist.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular.module('kalinaApp.services', []);
  // angular.module('theStyleApp.directives', []);
  angular.module('theStyleApp.animations', []);
  angular.module('kalinaApp.controllers', ['kalinaApp.services', 'theStyleApp.animations']);

  angular.module('kalinaApp', ['ngRoute', 'ngAnimate', 'kalinaApp.controllers'])
    .config(['$routeProvider', '$locationProvider', config])
    //.constant('baseServiceUrl', 'http://localhost:7777/api/'); // Chage this when you migrate to heroku
    .constant('baseServiceUrl', 'https://fast-badlands-79260.herokuapp.com/api/'); // Chage this when you migrate to heroku
}());
