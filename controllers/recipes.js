var Recipe = require('../models/recipe');


function index(req, res) {
    Recipe.find({}).populate('user').exec().then((recipes) => {
       res.status(200).json(recipes);
    });
};

function create(req, res) {
    var recipe = new Recipe(req.body);
    recipe.user = req.user._id;
    recipe.save(() => res.json(recipe));
};

function forUser(req, res) {
    Recipe.find({user: req.user._id}).populate('user').exec().then((recipes) => {
       res.status(200).json(recipes);
    });
};

module.exports = {
    index,
    create,
    forUser
}

