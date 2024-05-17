const express = require('express');

const EventController = require('../controllers/event');

const router = express.Router();

router.get('/', EventController.getAll); // to get all events
router.post('/', EventController.create); // to create events

router.get('/:event', EventController.getById); // to get event by id
router.put('/:event', EventController.update); // to update event
router.delete('/:event', EventController.remove); // to delete event

module.exports = router;