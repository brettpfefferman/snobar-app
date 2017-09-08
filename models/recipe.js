var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
    title: String,
    product: String,
    recipe: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Recipe', recipeSchema);