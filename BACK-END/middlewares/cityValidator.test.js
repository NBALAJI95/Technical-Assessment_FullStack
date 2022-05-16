const cityValidator = require("./cityValidator");

describe('cityValidator test suite', () => {
    it('calls next when city is present in query string', () => {
        const nextMock = jest.fn();
        cityValidator(
            { query: { city: "Jaipur" } },
            {},
            nextMock
        );
        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith();
    });

    it('calls next with Error when city is not present in query string', () => {
        const nextMock = jest.fn();
        cityValidator(
            { query: { } },
            {},
            nextMock
        );
        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith(new Error("City not found in query string"));
    });

    it('calls next with Error when valid city string is not present in query string', () => {
        const nextMock = jest.fn();
        cityValidator(
            { query: { city: "" } },
            {},
            nextMock
        );
        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith(new Error("City not found in query string"));
    });
});