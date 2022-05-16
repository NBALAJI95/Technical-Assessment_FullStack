module.exports = (req, res, next) => {
    if ('cities' in req.body && Array.isArray(req.body.cities) && req.body.cities.length) {
        next();
    } else {
        next(new Error("Cities not found in req body"));
    }
};