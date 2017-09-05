var express = require('express');
var router = express.Router();
var recipesCtrl = require('../../controllers/recipes');

/*---------- Protected Routes ----------*/

router.get('/', checkAuth(), recipesCtrl.index);


/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;