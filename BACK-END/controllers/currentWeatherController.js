const fetch = require("cross-fetch");

module.exports = async function(req, res, next) {
    try {
        const { city } = req.query;
        const fetchWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=858f15fed9292cbe25c341a754c55e45`
        );
        const fetchResponse = await fetchWeather.json();
        return res.json(fetchResponse);
    } catch (err) {
        console.log("error", err);
        next(err);
    }
};