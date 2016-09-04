(function() {
  'use strict';

  function worksService(data) {
    var works = [{
      name: 'Feelings and Thoughts',
      url: 'works/drawings/FeelingsAndThoughts.jpg',
      technique: 'Colour pencil drawing',
      year: '2014',
      category: 'drawings',
      size: '70x100cm'
    }, {
      name: 'Melancholy',
      url: 'works/drawings/Melancholy.jpg',
      technique: 'Colour pencil drawing',
      year: '2014',
      category: 'drawings',
      size: '70x100cm'
    }, {
      name: 'Past Racalls',
      url: 'works/drawings/PastRacalls.jpg',
      technique: 'Colour pencil drawing',
      year: '2014',
      category: 'drawings',
      size: '100x70cm'
    }, {
      name: 'Aldo Manuzio',
      url: 'works/exlibris/AldoManuzio.jpg',
      technique: 'Ex libris C3C5',
      year: '2015',
      category: 'exlibris',
      size: '11x11cm'
    }, {
      name: 'Bella Italia',
      url: 'works/exlibris/BellaItalia.jpg',
      technique: 'Ex libris',
      year: '2016',
      category: 'exlibris'
    }, {
      name: 'Feelings',
      url: 'works/exlibris/Feelings.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '10x12cm'
    }, {
      name: 'Female Feelings',
      url: 'works/exlibris/FemaleFeelings.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '11x14cm'
    }, {
      name: 'Just Like Shiva',
      url: 'works/exlibris/JustLikeShiva.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '10x16cm'
    }, {
      name: 'Mixing Music with Architecture',
      url: 'works/exlibris/MixingMusicWithArchitecture.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '10x13cm'
    }, {
      name: 'Music and Poetry I',
      url: 'works/exlibris/MusicAndPoetryI.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '10x14cm'
    }, {
      name: 'Music and Poetry II',
      url: 'works/exlibris/MusicAndPoetryII.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '9x12cm'
    }, {
      name: 'Romeo and Juliet',
      url: 'works/exlibris/RomeoAndJuliet.jpg',
      technique: 'Ex libris C3C5',
      year: '2015',
      category: 'exlibris',
      size: '14x14cm'
    }, {
      name: "Shepherdess Leading to Noah's Ark",
      url: 'works/exlibris/ShepherdessLeadingToNoahsArk.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '16x21cm'
    }, {
      name: 'Time',
      url: 'works/exlibris/Time.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '10x12cm'
    }, {
      name: 'Winter',
      url: 'works/exlibris/Winter.jpg',
      technique: 'Ex libris',
      year: '2016',
      category: 'exlibris'
    }, {
      name: 'Autumn',
      url: 'works/freeetchings/Autumn.jpg',
      technique: 'Free etching',
      year: '2016',
      category: 'freeetchings'
    }, {
      name: 'Babylon I',
      url: 'works/freeetchings/BabylonI.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '20x29cm'
    }, {
      name: 'Dandelion',
      url: 'works/freeetchings/Dandelion.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '19x29cm'
    }, {
      name: 'Enigma',
      url: 'works/freeetchings/Enigma.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '17x38cm'
    }, {
      name: 'Labyrinth',
      url: 'works/freeetchings/Labyrinth.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '20x29cm'
    }, {
      name: 'Landscape',
      url: 'works/freeetchings/Landscape.jpg',
      technique: 'Free etching X6',
      year: '2008',
      category: 'freeetchings',
      size: '34x40cm'
    }, {
      name: 'Sacred Image I',
      url: 'works/freeetchings/SacredImageI.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '39x59cm'
    }, {
      name: 'Sacred Image II',
      url: 'works/freeetchings/SacredImageII.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '59x39cm'
    }, {
      name: 'Sea',
      url: 'works/freeetchings/Sea.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '30x40cm'
    }, {
      name: 'Seasons',
      url: 'works/freeetchings/Seasons.jpg',
      technique: 'Free etching',
      year: '2016',
      category: 'freeetchings'
    }, {
      name: 'Thracian Ritual',
      url: 'works/freeetchings/ThracianRitual.jpg',
      technique: 'Free etching X3',
      year: '2010',
      category: 'freeetchings',
      size: '44x59cm'
    }, {
      name: 'Womb',
      url: 'works/freeetchings/Womb.jpg',
      technique: 'Free etching C4',
      year: '2012',
      category: 'freeetchings',
      size: '44x51cm'
    }, {
      name: 'Forest II',
      url: 'works/smalletchings/ForestII.jpg',
      technique: 'Small etching C3C5',
      year: '2010',
      category: 'smalletchings',
      size: '10x10cm'
    }, {
      name: 'Love Is on the Top of a Needle',
      url: 'works/smalletchings/LoveIsOnTheTopOfANeedle.jpg',
      technique: 'Small etching C3C5C6',
      year: '2015',
      category: 'smalletchings',
      size: '13x16cm'
    }, {
      name: 'Medea I',
      url: 'works/smalletchings/MedeaI.jpg',
      technique: 'Small etching C3C5',
      year: '2013',
      category: 'smalletchings',
      size: '16x21cm'
    }, {
      name: 'Medea II',
      url: 'works/smalletchings/MedeaII.jpg',
      technique: 'Small etching C3C5',
      year: '2013',
      category: 'smalletchings',
      size: '16x21cm'
    }, {
      name: 'Medea III',
      url: 'works/smalletchings/MedeaIII.jpg',
      technique: 'Small etching C3C5',
      year: '2015',
      category: 'smalletchings',
      size: '16x22cm'
    }, {
      name: 'The Rose of War',
      url: 'works/smalletchings/TheRoseOfWar.jpg',
      technique: 'Small etching C3C5',
      year: '2015',
      category: 'smalletchings',
      size: '15x15cm'
    }, {
      name: 'War',
      url: 'works/smalletchings/War.jpg',
      technique: 'Small etching C3C5',
      year: '2015',
      category: 'smalletchings',
      size: '15x15cm'
    }, {
      name: 'Flower of Art',
      url: 'works/watercolor/FlowerOfArt.jpg',
      technique: 'Watercolour children illustration',
      year: '2015',
      category: 'watercolor',
      size: '40x50cm'
    }, {
      name: 'In Vino Veritas',
      url: 'works/watercolor/InVinoVeritas.jpg',
      technique: 'Watercolour',
      year: '2013',
      category: 'watercolor',
      size: '35x44cm'
    }, {
      name: 'Sunflowers',
      url: 'works/watercolor/Sunflowers.jpg',
      technique: 'Watercolour',
      year: '2013',
      category: 'watercolor',
      size: '100x70cm'
    }];


    function getCurrentWork() {
      var random = Math.floor(Math.random() * (35));
      console.log(random);
      return works[random];
    }

    function getWorksByCategory(category) {
      var worksResult = [];
      for (var i = 0; i < works.length; i++) {
         var currentWork = works[i];
         if (currentWork.category === category){
          worksResult.push(currentWork);
         }
       }

       return worksResult;
    }

    function getWorksBySearch(searchText) {
      var worksResult = [];
      var text = searchText.toLowerCase();
      for (var i = 0; i < works.length; i++) {
         var currentWork = works[i];
         if (currentWork.category.toLowerCase().indexOf(text) > -1 ||
          currentWork.name.toLowerCase().indexOf(text) > -1 ||
          currentWork.year.toLowerCase().indexOf(text) > -1){
            worksResult.push(currentWork);
         }
       }

       return worksResult;
    }

    return {
      getCurrentWork: getCurrentWork,
      getWorksByCategory: getWorksByCategory,
      getWorksBySearch: getWorksBySearch
    };
  }

  angular.module('kalinaApp.services')
    .factory('worksService', ['data', worksService]);
}());
