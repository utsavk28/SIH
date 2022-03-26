const express = require('express');
const {
    getLocations,
    addLocation,
    getSpecific,
    addPlates,
} = require('../controllers/plates');

const router = express.Router();

router.get('/', getLocations);
router.post('/', addLocation);

router.get('/locs/:plate', getSpecific);

module.exports = router;
