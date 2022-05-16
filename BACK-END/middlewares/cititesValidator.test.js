const citiesValidator = require("./citiesValidator");

describe('citiesValidator test suite', () => {
    const nextMock = jest.fn();
    it('calls next when cities array is present in req body', () => {
        citiesValidator(
            { body: { cities: ["Mumbai", "Nagpur"] } },
            {},
            nextMock
        );

        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith();
    });

    it('calls next with Error when cities is not present in req body', () => {
        const nextMock = jest.fn();
        citiesValidator(
            { body: { } },
            {},
            nextMock
        );
        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith(new Error("Cities not found in req body"));
    });

    it('calls next with Error when valid cities array is not present in req body', () => {
        const nextMock = jest.fn();
        citiesValidator(
            { body: { cities: "" } },
            {},
            nextMock
        );
        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith(new Error("Cities not found in req body"));
    });
});