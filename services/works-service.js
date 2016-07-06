(function() {
  'use strict';

  function worksService(data) {
    var works = [{
      name: 'Mondrian',
      url: 'http://www.delphineaparis.com/sites/www.delphineaparis.com/files/mondrian_1.jpg',
      technique: 'Water clolor',
      year: '2015',
      category: 'watercolour'
    }, {
      name: 'The free fly',
      url: 'http://www.metmuseum.org/toah/images/h5/h5_1987.455.1.jpg',
      technique: 'Ex Libris',
      year: '2012',
      category: 'exlibris'
    }, {
      name: 'Over the borders',
      url: 'https://dl.airtable.com/tbKNvwPURJGlGLtc8vG7_08-00571.jpg',
      technique: 'Ex Libris',
      year: '2014',
      category: 'exlibris'
    }, {
      name: 'Within our thoughts',
      url: 'http://www.metmuseum.org/toah/images/h5/h5_1984.315.42.jpg',
      technique: 'Water clolor',
      year: '2012',
      category: 'watercolour'
    }, {
      name: 'Poetry is free',
      url: 'http://i.telegraph.co.uk/multimedia/archive/02701/klee_2701723b.jpg',
      technique: 'Water clolor',
      year: '2016',
      category: 'watercolour'
    }, 


    {
      name: 'Poetry is free',
      url: 'http://webneel.com/daily/sites/default/files/images/daily/04-2014/1-bird-drawing.jpg',
      technique: 'Drawing',
      year: '2016',
      category: 'drawings'
    }, {
      name: 'Poetry is free',
      url: 'https://www.strathmoreartist.com/tl_files/content/product_landing_pages/drawing/drawing_artwork_600px.jpg',
      technique: 'Drawing',
      year: '2016',
      category: 'drawings'
    }, {
      name: 'Poetry is free',
      url: 'https://www.artbynolan.com/wp-content/uploads/34-pencil-phone-final-drawing-600.jpg',
      technique: 'Drawing',
      year: '2016',
      category: 'drawings'
    }, {
      name: 'Poetry is free',
      url: 'http://s11.favim.com/orig/160407/love-beautiful-drawing-drawing-draw-Favim.com-4180071.jpeg',
      technique: 'Drawing',
      year: '2016',
      category: 'drawings'
    }, {
      name: 'Poetry is free',
      url: 'https://cms-assets.tutsplus.com/uploads/users/108/posts/25107/image/draw-vault-boy-fallout-final.png',
      technique: 'Drawing',
      year: '2016',
      category: 'drawings'
    }, {
      name: 'Poetry is free',
      url: 'http://www.fotolip.com/wp-content/uploads/2016/05/Drawing-Pictures-6.jpg',
      technique: 'Drawing',
      year: '2016',
      category: 'drawings'
    }, 






    {
      name: 'The free fly',
      url: 'http://gubarew.ru/images/gallery/pencil-0049.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://www.beal-surrealiste.com/Misanthrope(PENCIL)FullView.JPG',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://s3.gomedia.us/wp-content/uploads/2006/12/pencil-close-up.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://imgs.abduzeedo.com/files/articles/black-white-pencil-illustrations-mall-licudine/my_bitter_tears_by_frecklefaced29-d5kqo4s.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://25.media.tumblr.com/4d046bf11630eca12d62d17a14f4fcb4/tumblr_mygsngVNCY1rd0xeeo1_500.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://gubarew.ru/images/gallery/pencil-0010.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://alyoshingura.narod.ru/images/ded_2.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://2.bp.blogspot.com/-JzYMCcpSiQA/TlOuHnv7JfI/AAAAAAAAARM/cF_cObzPQWE/s1600/Naruto+and+Sakura+kissing.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://img05.deviantart.net/7107/i/2012/252/d/9/deidara_pencil_drawing_by_ekusasxisxgod-d5e6c1q.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://gubarew.ru/images/gallery/pencil-0011.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'http://gubarew.ru/images/gallery/pencil-0170.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }, {
      name: 'The free fly',
      url: 'https://pixabay.com/static/uploads/photo/2015/05/15/22/45/octopus-769372_960_720.jpg',
      technique: 'Free graphics',
      year: '2012',
      category: 'graphics'
    }];


    function getCurrentWork() {
      var random = Math.floor(Math.random() * (20));
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

    return {
      getCurrentWork: getCurrentWork,
      getWorksByCategory: getWorksByCategory
    };
  }

  angular.module('kalinaApp.services')
    .factory('worksService', ['data', worksService]);
}());
