var Response = require('./../models/Response');

module.exports = {
  read: function(req,res){
    Response.find(req.query, function(error, response){
      if(error){
        res.status(500).send(error);
      }
      var result = response[Math.floor(Math.random()*response.length)];
      res.status(200).send(result);
    });
  },
  create: function(req,res){
    Response.create(req.body, function(error, response){
      if(error){
        res.status(500).send(error);
      }
      res.status(200).send(response);
    });
  }
};
