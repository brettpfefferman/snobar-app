function index(req, res) {

}

function newRecipe(req, res) {
    res.render('myrecipes/new')
}

function update(req, res) {

}

function add(req, res) {

}

function deleteList(req, res) {

}

module.exports = {
    index, 
    newRecipe,
    update,
    add, 
    edit, 
    delete: deleteList
}