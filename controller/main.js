var app = require('../server.js');
var db = app.get('db');

module.exports = {
    addCustomer: function(req, res, next) {
      db.addCustomer([req.body.id, req.body.email, req.body.fname, req.body.lname, req.body.phone ], function(err, cityDetails) {
        if(err) {
          res.status(500).json(err);
        }
        else {
          res.status(200).json(cityDetails);
        }
      });
    },

    addOrder: function(req, res, next) {
      console.log(req.body);
    }


}
