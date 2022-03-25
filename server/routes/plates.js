const express = require('express');
const {
    getLocations,
    addLocation,
    getSpecific,
} = require('../controllers/plates');

const router = express.Router();

router.get('/', getLocations);
router.post('/', addLocation);

router.get('/locs/:plate', getSpecific);

module.exports = router;
