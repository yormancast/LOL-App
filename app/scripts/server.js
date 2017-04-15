// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var app        = express();
var request = require('request');

app.get('/api/riot/summonername/:sumName', function(req, res){
  request("https://lan.api.riotgames.com/api/lol/LAN/v1.4/summoner/by-name/" + req.params.sumName + "?api_key=" + "RGAPI-E47C6AC1-E76E-40BB-BC34-F91147BF88B6", function(err, body){
      res.json(body);
  });
});
app.get('/api/riot/stats/:sumID', function(req, res){
  request("https://lan.api.riotgames.com/api/lol/LAN/v1.3/stats/by-summoner/" + req.params.sumID + "/ranked?api_key=" + "RGAPI-E47C6AC1-E76E-40BB-BC34-F91147BF88B6", function(err, body){
      res.json(body);
  });
});

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
