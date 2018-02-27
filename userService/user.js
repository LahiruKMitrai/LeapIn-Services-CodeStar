var express = require('express');
var userService = express();

userService.get('/', function(req, res) {
  res.send({
    "Output": "Hello User!"
  });
});

userService.post('/', function(req, res) {
  res.send({
    "Output": "Hello User!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = userService
