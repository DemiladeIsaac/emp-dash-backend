const authJWT = require('../middleware/authJWT');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

   app.get("/api/test/all", (req,res) => {
       res.send("Hey y'all");
   });

    app.get("/api/test/user", [authJWT.verifyToken], (req,res) => {
       res.send("User content");
   });

   app.get("/api/test/admin", [authJWT.verifyToken,authJWT.isAdmin], (req,res) => {
       res.send("I am an admin");
   });

}