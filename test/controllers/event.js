const Event = require('../models/event');

async function getAll(req, res, next) {
    try {
        const docs = await Book.find().exec();

        return res.send(docs);
    } catch (error) {
        next(error);
    }
}

async function getById(req, res, next) {
    const { id } = req.params;

    try {
        const doc = await Event.findById(id).exec();

        return res.send(doc);
    } catch (error) {
        next(error);
    }
}

function update(req, res, next) {
    return res.send("Update");
}

async function create(req, res, next) {
    const event = {
        title: req.body.title,
        description: req.body.description,
        eventDate: req.body.eventDate,
        organizer: req.body.organizer,
    };

    try {
        const doc = await Event.create(event);

        return res.send(doc);
    } catch (error) {
        next(error);
    }
}

function remove(req, res, next) {
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