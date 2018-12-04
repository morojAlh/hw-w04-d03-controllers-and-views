var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');

router.get('/', function(request, response) {
    var mustacheVariables = {
        angryBirdsList: angryBirds.birds
    }
    response.render('./list',mustacheVariables);
})

router.get('/:id', function(request,response){
    var getAngryBird = request.params.id;
    var getAngryList = angryBirds.birds[getAngryBird];
    var mustacheVariables = {
        angryBirdsList: getAngryList
    }
    response.render('./show', mustacheVariables);
})

module.exports = router;