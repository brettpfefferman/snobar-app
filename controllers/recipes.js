var Recipe = ('../../models/recipes');


function getAllRecipes(req, res) {
    Recipe.find({}).populate('recipes').exec((err, recipes) => {
       res.status(200).json(recipes);
      })
};

module.exports = {
    getAllRecipes
}

