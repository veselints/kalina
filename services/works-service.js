(function() {
  'use strict';

  function worksService(data) {
    var works = [{
      name: 'Mondrian',
      url: 'http://www.delphineaparis.com/sites/www.delphineaparis.com/files/mondrian_1.jpg',
      technique: 'Water clolor',
      year: '2015'
    }, {
      name: 'The free fly',
      url: 'http://www.metmuseum.org/toah/images/h5/h5_1987.455.1.jpg',
      technique: 'Water clolor',
      year: '2012'
    }, {
      name: 'Over the borders',
      url: 'https://dl.airtable.com/tbKNvwPURJGlGLtc8vG7_08-00571.jpg',
      technique: 'Water clolor',
      year: '2014'
    }, {
      name: 'Within our thoughts',
      url: 'http://www.metmuseum.org/toah/images/h5/h5_1984.315.42.jpg',
      technique: 'Free graphics',
      year: '2012'
    }, {
      name: 'Poetry is free',
      url: 'http://i.telegraph.co.uk/multimedia/archive/02701/klee_2701723b.jpg',
      technique: 'Water clolor',
      year: '2016'
    }];


    function getCurrentWork() {
      var random = Math.floor(Math.random() * (5));
      console.log(random);
      return works[random];
    }

    return {
      getCurrentWork: getCurrentWork,
    };
  }

  angular.module('kalinaApp.services')
    .factory('worksService', ['data', worksService]);
}());
