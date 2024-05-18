const Event = require('../models/event');

function getAll(req, res, next){
    return res.send("Get All");
}

function getById(req, res, next){
    return res.send("Get By id");
}

function update(req, res, next){
    return res.send("Update");
}

async function create(req, res, next){
    const event = {
        title: req.body.title,
        description: req.body.description,
        eventDate: req.body.eventDate,
        organizer: req.body.organizer,
    };

    const doc = await Event.create(event);

    return res.send(doc);
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

// - title;
// - description;
// - event date;
// - organizer