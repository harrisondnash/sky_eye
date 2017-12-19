// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
module.exports = function(app) {
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
};
