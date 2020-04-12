(function() {
  'use strict';

  function worksService(data) {
    var works = [{
      name: 'Feelings and Thoughts',
      url: 'works/drawings/FeelingsAndThoughts.jpg',
      technique: 'Colour pencil drawing',
      year: 2014,
      category: 'drawings',
      size: '70x100cm',
      id: '1',
      available: true
    }, {
      name: 'Melancholy',
      url: 'works/drawings/Melancholy.jpg',
      technique: 'Colour pencil drawing',
      year: 2014,
      category: 'drawings',
      size: '70x100cm',
      id: '2',
      available: true
    }, {
      name: 'Past Racalls',
      url: 'works/drawings/PastRacalls.jpg',
      technique: 'Colour pencil drawing',
      year: 2014,
      category: 'drawings',
      size: '100x70cm',
      id: '3',
      available: true
    }, {
      name: 'Aldo Manuzio',
      url: 'works/exlibris/AldoManuzio.jpg',
      technique: 'Ex libris C3C5',
      year: 2015,
      category: 'exlibris',
      size: '11x11cm',
      id: '4',
      available: true
    }, {
      name: 'Bella Italia',
      url: 'works/exlibris/BellaItalia.jpg',
      technique: 'Ex libris',
      year: 2016,
      category: 'exlibris',
      size: '13,5x19cm',
      id: '5',
      available: true
    }, {
      name: 'Feelings',
      url: 'works/exlibris/Feelings.jpg',
      technique: 'Ex libris C3C5',
      year: 2014,
      category: 'exlibris',
      size: '10x12cm',
      id: '6',
      available: false
    }, {
      name: 'Female Feelings',
      url: 'works/exlibris/FemaleFeelings.jpg',
      technique: 'Ex libris C3C5',
      year: 2014,
      category: 'exlibris',
      size: '11x14cm',
      id: '7',
      available: false
    }, {
      name: 'Just Like Shiva',
      url: 'works/exlibris/JustLikeShiva.jpg',
      technique: 'Ex libris C3C5',
      year: 2014,
      category: 'exlibris',
      size: '10x16cm',
      id: '8',
      available: true
    }, {
      name: 'Mixing Music with Architecture',
      url: 'works/exlibris/MixingMusicWithArchitecture.jpg',
      technique: 'Ex libris C3C5',
      year: 2014,
      category: 'exlibris',
      size: '10x13cm',
      id: '9',
      available: false
    }, {
      name: 'Music and Poetry I',
      url: 'works/exlibris/MusicAndPoetryI.jpg',
      technique: 'Ex libris C3C5',
      year: 2013,
      category: 'exlibris',
      size: '10x14cm',
      id: '10',
      available: true
    }, {
      name: 'Music and Poetry II',
      url: 'works/exlibris/MusicAndPoetryII.jpg',
      technique: 'Ex libris C3C5',
      year: 2013,
      category: 'exlibris',
      size: '9x12cm',
      id: '11',
      available: true
    }, {
      name: 'Romeo and Juliet',
      url: 'works/exlibris/RomeoAndJuliet.jpg',
      technique: 'Ex libris C3C5',
      year: 2015,
      category: 'exlibris',
      size: '14x14cm',
      id: '12',
      available: true
    },{
      name: 'Winter Mood',
      url: 'works/watercolor/WinterMood.jpg',
      technique: 'Watercolor',
      year: 2017,
      category: 'watercolor',
      size: '50x54cm',
      id: '13',
      available: true
    }, {
      name: 'Time',
      url: 'works/exlibris/Time.jpg',
      technique: 'Ex libris C3C5',
      year: 2013,
      category: 'exlibris',
      size: '10x12cm',
      id: '14',
      available: true
    },{
      name: 'Winter',
      url: 'works/exlibris/Winter.jpg',
      technique: 'Ex libris',
      year: 2016,
      category: 'exlibris',
      size: '13.5x19cm',
      id: '15',
      available: true
    }, {
      name: 'Autumn',
      url: 'works/freeetchings/Autumn.jpg',
      technique: 'Free etching',
      year: 2016,
      category: 'freeetchings',
      size: '25x29cm',
      id: '16',
      available: true
    }, {
      name: 'Babylon I',
      url: 'works/freeetchings/BabylonI.jpg',
      technique: 'Free etching C3C5',
      year: 2011,
      category: 'freeetchings',
      size: '20x29cm',
      id: '17',
      available: true
    }, {
      name: 'Babylon II',
      url: 'works/freeetchings/BabylonII.jpg',
      technique: 'Free etching C3C5',
      year: 2011,
      category: 'freeetchings',
      size: '20x29cm',
      id: '18',
      available: true
    }, {
      name: 'Dandelion',
      url: 'works/freeetchings/Dandelion.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '19x29cm',
      id: '19',
      available: true
    }, {
      name: 'Enigma',
      url: 'works/freeetchings/Enigma.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '17x38cm',
      id: '20',
      available: true
    }, {
      name: 'Labyrinth',
      url: 'works/freeetchings/Labyrinth.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '20x29cm',
      id: '21',
      available: true
    }, {
      name: 'Landscape',
      url: 'works/freeetchings/Landscape.jpg',
      technique: 'Free etching X6',
      year: 2008,
      category: 'freeetchings',
      size: '34x40cm',
      id: '22',
      available: true
    }, {
      name: 'Sacred Image I',
      url: 'works/freeetchings/SacredImageI.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '39x59cm',
      id: '23',
      available: true
    }, {
      name: 'Sacred Image II',
      url: 'works/freeetchings/SacredImageII.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '59x39cm',
      id: '24',
      available: true
    }, {
      name: 'Sacred Image III',
      url: 'works/freeetchings/SacredImageIII.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '39x59cm',
      id: '25',
      available: true
    },{
      name: 'Sea',
      url: 'works/freeetchings/Sea.jpg',
      technique: 'Free etching C3C5',
      year: 2011,
      category: 'freeetchings',
      size: '30x40cm',
      id: '26',
      available: true
    }, {
      name: 'Forest',
      url: 'works/freeetchings/ForestL.jpg',
      technique: 'Free etching C3C5',
      year: 2011,
      category: 'freeetchings',
      size: '30x40cm',
      id: '27',
      available: true
    }, {
      name: 'Field',
      url: 'works/freeetchings/Field.jpg',
      technique: 'Free etching C3C5',
      year: 2011,
      category: 'freeetchings',
      size: '30x40cm',
      id: '28',
      available: true
    }, {
      name: 'Seasons',
      url: 'works/freeetchings/Seasons.jpg',
      technique: 'Free etching',
      year: 2016,
      category: 'freeetchings',
      size: '50x50cm',
      id: '29',
      available: true
    }, {
      name: 'Thracian Ritual',
      url: 'works/freeetchings/ThracianRitual.jpg',
      technique: 'Free etching X3',
      year: 2010,
      category: 'freeetchings',
      size: '44x59cm',
      id: '30',
      available: true
    }, {
      name: 'Womb',
      url: 'works/freeetchings/Womb.jpg',
      technique: 'Free etching C4',
      year: 2012,
      category: 'freeetchings',
      size: '44x51cm',
      id: '31',
      available: true
    }, {
      name: 'Forest II',
      url: 'works/smalletchings/ForestII.jpg',
      technique: 'Small etching C3C5',
      year: 2010,
      category: 'smalletchings',
      size: '10x10cm',
      id: '32',
      available: true
    }, {
      name: 'Love Is on the Top of a Needle',
      url: 'works/smalletchings/LoveIsOnTheTopOfANeedle.jpg',
      technique: 'Small etching C3C5C6',
      year: 2015,
      category: 'smalletchings',
      size: '13x16cm',
      id: '33',
      available: true
    }, {
      name: 'Medea I',
      url: 'works/smalletchings/MedeaI.jpg',
      technique: 'Small etching C3C5',
      year: 2013,
      category: 'smalletchings',
      size: '16x21cm',
      id: '34',
      available: true
    }, {
      name: 'Medea II',
      url: 'works/smalletchings/MedeaII.jpg',
      technique: 'Small etching C3C5',
      year: 2013,
      category: 'smalletchings',
      size: '16x21cm',
      id: '35',
      available: true
    }, {
      name: 'Medea III',
      url: 'works/smalletchings/MedeaIII.jpg',
      technique: 'Small etching C3C5',
      year: 2015,
      category: 'smalletchings',
      size: '16x22cm',
      id: '36',
      available: true
    }, {
      name: 'The Rose of War',
      url: 'works/smalletchings/TheRoseOfWar.jpg',
      technique: 'Small etching C3C5',
      year: 2015,
      category: 'smalletchings',
      size: '15x15cm',
      id: '37',
      available: true
    }, {
      name: 'War',
      url: 'works/smalletchings/War.jpg',
      technique: 'Small etching C3C5',
      year: 2015,
      category: 'smalletchings',
      size: '15x15cm',
      id: '38',
      available: true
    }, {
      name: 'Flower of Art',
      url: 'works/watercolor/FlowerOfArt.jpg',
      technique: 'Watercolour children illustration',
      year: 2015,
      category: 'watercolor',
      size: '40x50cm',
      id: '39',
      available: true
    }, {
      name: 'In Vino Veritas',
      url: 'works/watercolor/InVinoVeritas.jpg',
      technique: 'Watercolour',
      year: 2013,
      category: 'watercolor',
      size: '35x44cm',
      id: '40',
      available: true
    }, {
      name: 'Sunflowers',
      url: 'works/watercolor/Sunflowers.jpg',
      technique: 'Watercolour',
      year: 2013,
      category: 'watercolor',
      size: '100x70cm',
      id: '41',
      available: true
    }, {
      name: "Shepherdess Leading to Noah's Ark",
      url: 'works/exlibris/ShepherdessLeadingToNoahsArk.jpg',
      technique: 'Ex libris C3C5',
      year: 2013,
      category: 'exlibris',
      size: '16x21cm',
      id: '42',
      available: true
    }, {
      name: 'Memento Mori',
      url: 'works/freeetchings/MementoMori.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '20x30cm',
      id: '43',
      available: true
    }, {
      name: 'Nocturno',
      url: 'works/freeetchings/Nocturno.jpg',
      technique: 'Free etching C3C5',
      year: 2012,
      category: 'freeetchings',
      size: '21x30cm',
      id: '44',
      available: true
    }, {
      name: 'Summer',
      url: 'works/exlibris/Summer.jpg',
      technique: 'Ex libris C3C5',
      year: 2017,
      category: 'exlibris',
      size: '13.5x19cm',
      id: '45',
      available: true
    }, {
      name: 'Summer',
      url: 'works/watercolor/Summer.jpg',
      technique: 'Watercolour',
      year: 2016,
      category: 'watercolor',
      size: '49x58cm',
      id: '46',
      available: true
    },{
      name: 'Caryatides',
      url: 'works/freeetchings/Caryatides.jpg',
      technique: 'Free etching C3C5',
      year: 2016,
      category: 'freeetchings',
      size: '40x50cm',
      id: '47',
      available: true
    },{
      name: 'Night And Day',
      url: 'works/watercolor/NightAndDay.jpg',
      technique: 'Watercolor',
      year: 2017,
      category: 'watercolor',
      size: '70x100cm',
      id: '48',
      available: true
    },{
      name: 'Seasons Of A Tree',
      url: 'works/watercolor/SeasonsOfATree.JPG',
      technique: 'Watercolor',
      year: 2017,
      category: 'watercolor',
      size: '40x60cm',
      id: '49',
      available: true
    },{
      name: 'Autumn',
      url: 'works/exlibris/Autumn.jpg',
      technique: 'Ex libris C3C5',
      year: 2018,
      category: 'exlibris',
      size: '13.5x19cm',
      id: '50',
      available: true
    },{
      name: 'The Bulb',
      url: 'works/exlibris/TheBulb.jpg',
      technique: 'Ex libris C3C5',
      year: 2017,
      category: 'exlibris',
      size: '9.5x14cm',
      id: '51',
      available: true
    },{
      name: 'Energy Cycle',
      url: 'works/exlibris/EnergyCycle.jpg',
      technique: 'Ex libris C3C5',
      year: 2017,
      category: 'exlibris',
      size: '13.5x15cm',
      id: '52',
      available: true
    },{
      name: 'Connection',
      url: 'works/freeetchings/Connection.jpg',
      technique: 'Free etching',
      year: 2018,
      category: 'freeetchings',
      size: '34x61cm',
      id: '53',
      available: true
    },{
      name: 'Tree of Life',
      url: 'works/freeetchings/TreeOfLife.jpg',
      technique: 'Free etching',
      year: 2018,
      category: 'freeetchings',
      size: '34x61cm',
      id: '54',
      available: true
    },{
      name: 'Autumn',
      url: 'works/watercolor/Autumn.jpg',
      technique: 'Watercolour',
      year: 2018,
      category: 'watercolor',
      size: '49x58cm',
      id: '55',
      available: true
    },{
      name: 'The Sea',
      url: 'works/watercolor/TheSea.jpg',
      technique: 'Watercolour',
      year: 2018,
      category: 'watercolor',
      size: '40x65cm',
      id: '56',
      available: true
    },{
      name: 'Winter',
      url: 'works/watercolor/Winter.jpg',
      technique: 'Watercolour',
      year: 2018,
      category: 'watercolor',
      size: '49x58cm',
      id: '57',
      available: true
    },{
      name: 'Spring',
      url: 'works/watercolor/Spring.jpg',
      technique: 'Watercolour',
      year: 2018,
      category: 'watercolor',
      size: '49x58cm',
      id: '59',
      available: true
    },{
      name: 'Wings Of Desire',
      url: 'works/exlibris/WingsOfDesire.jpg',
      technique: 'Ex libris C3C5',
      year: 2019,
      category: 'exlibris',
      size: '12x12cm',
      id: '60',
      available: true
    },{
      name: 'To Be Don Quixote',
      url: 'works/exlibris/ToBeDonQuixote.jpg',
      technique: 'Ex libris C3C5',
      year: 2019,
      category: 'exlibris',
      size: '16x16cm',
      id: '61',
      available: true
    },{
      name: 'The Dream Of The Butterfly',
      url: 'works/freeetchings/TheDreamOfTheButterfly.jpg',
      technique: 'Free etching C3C5',
      year: 2019,
      category: 'freeetchings',
      size: '28.5x41cm',
      id: '62',
      available: true
    },{
      name: 'Pulse Of The Sea',
      url: 'works/freeetchings/PulseOfTheSea.jpg',
      technique: 'Free etching C3C5',
      year: 2019,
      category: 'freeetchings',
      size: '28.5x41cm',
      id: '63',
      available: true
    },{
      name: "Nature's Eye",
      url: 'works/freeetchings/NaturesEye.jpg',
      technique: 'Free etching C3C5',
      year: 2019,
      category: 'freeetchings',
      size: '28x29.5cm',
      id: '64',
      available: true
    },{
      name: 'Midnight',
      url: 'works/watercolor/Midnight.jpg',
      technique: 'Watercolour',
      year: 2019,
      category: 'watercolor',
      size: '55x75cm',
      id: '65',
      available: true
    },{
      name: 'Spring',
      url: 'works/exlibris/Spring.jpg',
      technique: 'Ex libris C3C5',
      year: 2020,
      category: 'exlibris',
      size: '13.5x19cm',
      id: '66',
      available: true
    }];

    function getCurrentWork() {
      var fromYear = (new Date().getFullYear()) - 3;
      var filtered = works.filter(function(work){
        return work.year >= fromYear && work.available;
      });
      var random = Math.floor(Math.random() * (filtered.length - 1));

      return filtered[random];
    }

    function getWorksByCategory(category) {
      var worksResult = works.filter(function(work){
        return work.category === category && work.available;
      });

      return worksResult.sort(_compare);
    }

    function getWorksBySearch(searchText) {
      var worksResult = [];
      var text = searchText.toLowerCase();
      for (var i = 0; i < works.length; i++) {
         var currentWork = works[i];

         if (!currentWork.available) {
           continue;
         }

         if (currentWork.category.toLowerCase().indexOf(text) > -1 ||
          currentWork.name.toLowerCase().indexOf(text) > -1){
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

    function _compare(a, b) {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      return 0;
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
