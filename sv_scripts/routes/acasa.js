const express = require('express');

let acasa = {}

acasa.start = async function(){
  acasa.router = express.Router();
}

acasa.init = function(app , collection){
  acasa.router.get('/acasa', (req, res) => {
    res.render('acasa.ejs');
  })
  acasa.router.get('/', (req, res) => {
    res.redirect('/acasa');
  })
  app.use("/" , acasa.router)
}

module.exports = acasa;



