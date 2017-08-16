var db = require("../models");


module.exports = function(app) {

  app.get("/api/posts", function(req, res) {
    
    db.orders.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  app.post("/api/posts", function(req, res) {
    db.orders.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
