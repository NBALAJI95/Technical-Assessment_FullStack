module.exports = (req, res, next) => {
    if ('city' in req.query && req.query && req.query.city) {
        next();
    } else {
        next(new Error("City not found in query string"));
    }
};