'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.server);

describe('Middle Ware', () => {

    it('Should check the Every Thing Is Working Good Successfully', async () => {
        // arrange
        let status = 200;
        let param = '/';
        let text = 'Every Thing Is Working Good  :)';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);
    });

    it('Should Check Error 404 Not Found', async () => {
        // arrange
        let status = 404;
        let param = '/error';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });


    it('Should Check 500 Internal Server Error', async () => {
        // arrange
        let status = 500;
        let param = '/bad';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });


    it('Should check the data response it work Successfully', async () => {
        // arrange
        let status = 200;
        let param = '/person?name=ibrahim';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });

})