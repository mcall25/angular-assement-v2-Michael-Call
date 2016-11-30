var app = require('../server.js');


var movies = [
  {
    name: 'Finding Dory',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/11/post_typevideop26931.jpg',
    price: '20',
    id: "kkk"
  },
  {
    name: 'Tarzan',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/10/Tarzan.jpg',
    price: '10',
    id: "2"
  },
  {
    name: 'Nine Lives',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26779.jpg',
    price: '10',
    id: "mike"
  },
  {
    name: 'Star Trek',
    pic: 'https://d1tizfy05xv795.cloudfront.net/2016/10/Star+Trek+Beyond.jpg',
    price: '10',
    id: "fh"
  },
  {
    name: 'Cafe Society',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26417.jpg',
    price: '10',
    id: "d"
  },
  {
    name: 'Kubo',
    pic: 'https://d1tizfy05xv795.cloudfront.net/uploads/2016/10/post_typevideop26431.jpg',
    price: '10',
    id: "w"
  }
];


module.exports = {

  getMovies: function(req, res, next) {
    var array = [];
      for (var i = 0; i < movies.length; i++) {
        var ans = {
           name: movies[i].name,
           img: movies[i].pic,
           price: movies[i].price,
           id: movies[i].id,
         }
        array.push(ans);
      }
        res.json(array);
  },

  getMovies2: function(req, res, next) {
    var array2 = [];
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].id === req.params.id) {
        var ans = {
          name: movies[i].name,
          img: movies[i].pic,
          price: movies[i].price,
          id: movies[i].id,
        }
        array2.push(ans);
      }
    }
    res.json(array2);
  }

}
