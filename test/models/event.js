const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Number,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
},{
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);
