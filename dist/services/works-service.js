(function() {
  'use strict';

  function worksService(data) {
    var works = [{
      name: 'Summer',
      url: 'works/watercolor/Summer.jpg',
      technique: 'Watercolour',
      year: '2016',
      category: 'watercolor',
      size: '49x58cm',
      id: '46'
    }, {
      name: 'Feelings and Thoughts',
      url: 'works/drawings/FeelingsAndThoughts.jpg',
      technique: 'Colour pencil drawing',
      year: '2014',
      category: 'drawings',
      size: '70x100cm',
      id: '1'
    }, {
      name: 'Winter',
      url: 'works/exlibris/Winter.jpg',
      technique: 'Ex libris',
      year: '2016',
      category: 'exlibris',
      size: '13.5x19cm',
      id: '15'
    }, {
      name: 'Summer',
      url: 'works/exlibris/Summer.jpg',
      technique: 'Ex libris C3C5',
      year: '2017',
      category: 'exlibris',
      size: '13.5x19cm',
      id: '45'
    }, {
      name: 'Melancholy',
      url: 'works/drawings/Melancholy.jpg',
      technique: 'Colour pencil drawing',
      year: '2014',
      category: 'drawings',
      size: '70x100cm',
      id: '2'
    }, {
      name: 'Past Racalls',
      url: 'works/drawings/PastRacalls.jpg',
      technique: 'Colour pencil drawing',
      year: '2014',
      category: 'drawings',
      size: '100x70cm',
      id: '3'
    }, {
      name: 'Bella Italia',
      url: 'works/exlibris/BellaItalia.jpg',
      technique: 'Ex libris',
      year: '2016',
      category: 'exlibris',
      size: '13,5x19cm',
      id: '5'
    }, {
      name: 'Feelings',
      url: 'works/exlibris/Feelings.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '10x12cm',
      id: '6'
    }, {
      name: 'Female Feelings',
      url: 'works/exlibris/FemaleFeelings.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '11x14cm',
      id: '7'
    }, {
      name: 'Just Like Shiva',
      url: 'works/exlibris/JustLikeShiva.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '10x16cm',
      id: '8'
    }, {
      name: 'Mixing Music with Architecture',
      url: 'works/exlibris/MixingMusicWithArchitecture.jpg',
      technique: 'Ex libris C3C5',
      year: '2014',
      category: 'exlibris',
      size: '10x13cm',
      id: '9'
    }, {
      name: 'Music and Poetry I',
      url: 'works/exlibris/MusicAndPoetryI.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '10x14cm',
      id: '10'
    }, {
      name: 'Music and Poetry II',
      url: 'works/exlibris/MusicAndPoetryII.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '9x12cm',
      id: '11'
    }, {
      name: 'Romeo and Juliet',
      url: 'works/exlibris/RomeoAndJuliet.jpg',
      technique: 'Ex libris C3C5',
      year: '2015',
      category: 'exlibris',
      size: '14x14cm',
      id: '12'
    }, {
      name: 'Time',
      url: 'works/exlibris/Time.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '10x12cm',
      id: '14'
    },{
      name: 'Aldo Manuzio',
      url: 'works/exlibris/AldoManuzio.jpg',
      technique: 'Ex libris C3C5',
      year: '2015',
      category: 'exlibris',
      size: '11x11cm',
      id: '4'
    }, {
      name: 'Autumn',
      url: 'works/freeetchings/Autumn.jpg',
      technique: 'Free etching',
      year: '2016',
      category: 'freeetchings',
      size: '25x29cm',
      id: '16'
    }, {
      name: 'Babylon I',
      url: 'works/freeetchings/BabylonI.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '20x29cm',
      id: '17'
    }, {
      name: 'Babylon II',
      url: 'works/freeetchings/BabylonII.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '20x29cm',
      id: '18'
    }, {
      name: 'Dandelion',
      url: 'works/freeetchings/Dandelion.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '19x29cm',
      id: '19'
    }, {
      name: 'Enigma',
      url: 'works/freeetchings/Enigma.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '17x38cm',
      id: '20'
    }, {
      name: 'Labyrinth',
      url: 'works/freeetchings/Labyrinth.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '20x29cm',
      id: '21'
    }, {
      name: 'Landscape',
      url: 'works/freeetchings/Landscape.jpg',
      technique: 'Free etching X6',
      year: '2008',
      category: 'freeetchings',
      size: '34x40cm',
      id: '22'
    }, {
      name: 'Sacred Image I',
      url: 'works/freeetchings/SacredImageI.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '39x59cm',
      id: '23'
    }, {
      name: 'Sacred Image II',
      url: 'works/freeetchings/SacredImageII.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '59x39cm',
      id: '24'
    }, {
      name: 'Sacred Image III',
      url: 'works/freeetchings/SacredImageIII.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '39x59cm',
      id: '25'
    },{
      name: 'Sea',
      url: 'works/freeetchings/Sea.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '30x40cm',
      id: '26'
    }, {
      name: 'Forest',
      url: 'works/freeetchings/ForestL.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '30x40cm',
      id: '27'
    }, {
      name: 'Field',
      url: 'works/freeetchings/Field.jpg',
      technique: 'Free etching C3C5',
      year: '2011',
      category: 'freeetchings',
      size: '30x40cm',
      id: '28'
    }, {
      name: 'Seasons',
      url: 'works/freeetchings/Seasons.jpg',
      technique: 'Free etching',
      year: '2016',
      category: 'freeetchings',
      size: '50x50cm',
      id: '29'
    }, {
      name: 'Thracian Ritual',
      url: 'works/freeetchings/ThracianRitual.jpg',
      technique: 'Free etching X3',
      year: '2010',
      category: 'freeetchings',
      size: '44x59cm',
      id: '30'
    }, {
      name: 'Womb',
      url: 'works/freeetchings/Womb.jpg',
      technique: 'Free etching C4',
      year: '2012',
      category: 'freeetchings',
      size: '44x51cm',
      id: '31'
    }, {
      name: 'Forest II',
      url: 'works/smalletchings/ForestII.jpg',
      technique: 'Small etching C3C5',
      year: '2010',
      category: 'smalletchings',
      size: '10x10cm',
      id: '32'
    }, {
      name: 'Love Is on the Top of a Needle',
      url: 'works/smalletchings/LoveIsOnTheTopOfANeedle.jpg',
      technique: 'Small etching C3C5C6',
      year: '2015',
      category: 'smalletchings',
      size: '13x16cm',
      id: '33'
    }, {
      name: 'Medea I',
      url: 'works/smalletchings/MedeaI.jpg',
      technique: 'Small etching C3C5',
      year: '2013',
      category: 'smalletchings',
      size: '16x21cm',
      id: '34'
    }, {
      name: 'Medea II',
      url: 'works/smalletchings/MedeaII.jpg',
      technique: 'Small etching C3C5',
      year: '2013',
      category: 'smalletchings',
      size: '16x21cm',
      id: '35'
    }, {
      name: 'Medea III',
      url: 'works/smalletchings/MedeaIII.jpg',
      technique: 'Small etching C3C5',
      year: '2015',
      category: 'smalletchings',
      size: '16x22cm',
      id: '36'
    }, {
      name: 'The Rose of War',
      url: 'works/smalletchings/TheRoseOfWar.jpg',
      technique: 'Small etching C3C5',
      year: '2015',
      category: 'smalletchings',
      size: '15x15cm',
      id: '37'
    }, {
      name: 'War',
      url: 'works/smalletchings/War.jpg',
      technique: 'Small etching C3C5',
      year: '2015',
      category: 'smalletchings',
      size: '15x15cm',
      id: '38'
    }, {
      name: 'Flower of Art',
      url: 'works/watercolor/FlowerOfArt.jpg',
      technique: 'Watercolour children illustration',
      year: '2015',
      category: 'watercolor',
      size: '40x50cm',
      id: '39'
    }, {
      name: 'In Vino Veritas',
      url: 'works/watercolor/InVinoVeritas.jpg',
      technique: 'Watercolour',
      year: '2013',
      category: 'watercolor',
      size: '35x44cm',
      id: '40'
    }, {
      name: 'Sunflowers',
      url: 'works/watercolor/Sunflowers.jpg',
      technique: 'Watercolour',
      year: '2013',
      category: 'watercolor',
      size: '100x70cm',
      id: '41'
    }, {
      name: "Shepherdess Leading to Noah's Ark",
      url: 'works/exlibris/ShepherdessLeadingToNoahsArk.jpg',
      technique: 'Ex libris C3C5',
      year: '2013',
      category: 'exlibris',
      size: '16x21cm',
      id: '42'
    }, {
      name: 'Memento Mori',
      url: 'works/freeetchings/MementoMori.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '20x30cm',
      id: '43'
    }, {
      name: 'Nocturno',
      url: 'works/freeetchings/Nocturno.jpg',
      technique: 'Free etching C3C5',
      year: '2012',
      category: 'freeetchings',
      size: '21x30cm',
      id: '44'
    },{
      name: 'Caryatides',
      url: 'works/freeetchings/Caryatides.jpg',
      technique: 'Free etching C3C5',
      year: '2016',
      category: 'freeetchings',
      size: '40x50cm',
      id: '47'
    },{
      name: 'Night And Day',
      url: 'works/watercolor/NightAndDay.jpg',
      technique: 'Watercolor',
      year: '2017',
      category: 'watercolor',
      size: '70x100cm',
      id: '48'
    },{
      name: 'Seasons Of A Tree',
      url: 'works/watercolor/SeasonsOfATree.JPG',
      technique: 'Watercolor',
      year: '2017',
      category: 'watercolor',
      size: '40x60cm',
      id: '49'
    },{
      name: 'Winter Mood',
      url: 'works/watercolor/WinterMood.jpg',
      technique: 'Watercolor',
      year: '2017',
      category: 'watercolor',
      size: '50x54cm',
      id: '50'
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

    function getWorkById(id) {
      for (var i = 0; i < works.length; i++) {
         var currentWork = works[i];
         if (currentWork.id == id){
            return currentWork;
         }
       }

      return null;
    }

    return {
      getCurrentWork: getCurrentWork,
      getWorksByCategory: getWorksByCategory,
      getWorksBySearch: getWorksBySearch,
      getWorkById: getWorkById
    };
  }

  angular.module('kalinaApp.services')
    .factory('worksService', ['data', worksService]);
}());
