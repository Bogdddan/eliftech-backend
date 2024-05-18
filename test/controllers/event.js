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

        if (doc === null) {
            return res.status(404).send({ message: "Event not found" })
        }

        return res.send(doc);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    const { id } = req.params;

    const event = {
        title: req.body.title,
        description: req.body.description,
        eventDate: req.body.eventDate,
        organizer: req.body.organizer,
    };

    try {
        const result = await Event.findByIdAndUpdate(id, event).exec();

        if(result === null){
            return res.status(404).send({message: 'Event not found'});
        }

        res.send(result);
    } catch (error) {
        next(error);
    }

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

async function remove(req, res, next) {
    const { id } = req.params;

    const result = await Event.findByIdAndRemove(id).exec();

    try {
        if (result === null) {
            return res.status(404).send({ message: "Event not found" })
        }
        res.status(204).end();
    } catch (error) {
        netx(error);
    }
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