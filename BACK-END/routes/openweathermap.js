const express = require('express');
const router = express.Router();

const citiesValidator = (req, res, next) => {
    if ('cities' in req.body && req.body.cities.length) {
        next();
    } else {
        next(new Error("Cities not found in req body"));
    }
};

/* GET users listing. */
router.get('/', require("../middlewares/cityValidator"), require("../controllers/currentWeatherController"));
router.get('/forecast5', require("../middlewares/citiesValidator"), require("../controllers/forecast5DaysController"));

module.exports = router;