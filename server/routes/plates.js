const express = require('express');
const {
    getLocations,
    addLocation,
    getSpecific,
} = require('../controllers/plates');

const router = express.Router();

router.route('/').get(getLocations).post(addLocation);

router.route('/locs').post(getSpecific);

module.exports = router;
