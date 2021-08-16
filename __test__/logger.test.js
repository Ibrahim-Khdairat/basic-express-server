const { describe, beforeEach, afterEach } = require('@jest/globals')
const loggerMiddleware = require('../src/middleware/logger');

describe('Logger MiddleWare', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        // attach to the console method
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // restore console method to it's original state
        consoleSpy.mockRestore();
    });


    it('Should Log To The Console', () => {
        // act
        loggerMiddleware(req, res, next);
        // assert
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('Should Move To The Next Middle Ware', () => {
        // act
        loggerMiddleware(req, res, next);
        // assert
        expect(next).toHaveBeenCalledWith();
    });

})