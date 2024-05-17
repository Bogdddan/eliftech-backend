
function getAll(req, res, next){
    return res.send("Get All");
}

function getById(req, res, next){
    return res.send("Get By id");
}

function update(req, res, next){
    return res.send("Update");
}

function create(req, res, next){
    return res.send("Create");
}

function remove(req, res, next){
    return res.send("Get remove");
}

module.exports = {
    getAll,
    getById,
    update,
    create,
    remove,
}