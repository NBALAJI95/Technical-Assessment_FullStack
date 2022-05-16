const fetch = require("cross-fetch");
const currentWeatherController = require("./currentWeatherController");

jest.mock("cross-fetch", () => jest.fn());

describe('currentWeather API test suite', () => {
    afterEach(() => {
        fetch.mockClear();
    });

    it('returns fetched current weather value if promise resolves successfully', () => {
        const resJsonMock = jest.fn();
        const nextMock = jest.fn();

        fetch.mockResolvedValue({
            status: 200,
            json: () => Promise.resolve({ test: "test" }),
        });

        currentWeatherController(
            { query: { city: "Kochi" } },
            { json: resJsonMock },
            nextMock
        ).then(() => {
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=Kochi&units=metric&APPID=858f15fed9292cbe25c341a754c55e45`);
            expect(resJsonMock).toHaveBeenCalledTimes(1);
            expect(resJsonMock).toHaveBeenCalledWith({ test: "test" });
        });
    });

    it('called catch next with err when promise is rejected', () => {
        const resJsonMock = jest.fn();
        const nextMock = jest.fn();

        fetch.mockRejectedValue({
            status: 200,
            json: () => Promise.reject({ test: "test" }),
        });

        currentWeatherController(
            { query: { city: "Kochi" } },
            { json: resJsonMock },
            nextMock
        ).then(() => {
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=Kochi&units=metric&APPID=858f15fed9292cbe25c341a754c55e45`);
            expect(nextMock).toHaveBeenCalledTimes(1);
        });
    });
});