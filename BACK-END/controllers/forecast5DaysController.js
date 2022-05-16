const fetch = require("cross-fetch");

module.exports = async function(req, res, next) {
    try {
        const { cities } = req.body;

        return res.json(cities.map(async (city) => {
            const fetchWeather = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=858f15fed9292cbe25c341a754c55e45`
            );
            const returnValue =  await fetchWeather.json();
            console.log('returnValue', returnValue);
            return returnValue;
        }));
    } catch (err) {
        console.log("error", err);
        next(err);
    }
}