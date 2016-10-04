(function() {
  'use strict';

  function FooterController($location) {
    var vm = this;
    var currentUrl = $location.url();
    debugger;

    if (currentUrl.indexOf('#/theartist') > -1 ||
        currentUrl.indexOf('#/search') > -1) {
      vm.displayStyle = 'static';
    } else {
      vm.displayStyle = 'fixed';
    }
  }

  angular.module('kalinaApp.controllers')
    .controller('FooterController', ['$location', FooterController]);
}());
