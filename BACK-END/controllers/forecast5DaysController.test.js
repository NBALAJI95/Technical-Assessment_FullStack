const fetch = require("cross-fetch");
const forecast5DaysController = require("./forecast5DaysController");

jest.mock("cross-fetch", () => jest.fn());

describe('forecast5Days API test suite', () => {
    afterEach(() => {
        fetch.mockClear();
    });

   it('fetched 5 days forecast data of all cities', () => {
       const resJsonMock = jest.fn();

       fetch.mockResolvedValue({
           status: 200,
           json: () => Promise.resolve({ test: "test" }),
       });

       forecast5DaysController(
           {
               body: { cities: ["Surat", "Belgaum", "Belgaum"] }
           },
           { json: resJsonMock },
           jest.fn()
       ).then(() => {
           expect(fetch).toHaveBeenCalledTimes(3);
           expect(resJsonMock).toHaveBeenCalledTimes(1);
       });
   });
});