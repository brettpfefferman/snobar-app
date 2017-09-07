var mongoose = require('mongoose');

var myrecipesSchema = new mongoose.Schema({
    title: String,
    product: String,
    recipe: String
})

module.exports = mongoose.model('MyRecipes', myrecipesSchema);