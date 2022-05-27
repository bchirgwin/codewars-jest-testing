const nock = require('nock')
const petImage = require('./petImage');


describe ('getRandomDog', () => {


    test('should be called', (done) => {
        const mock = jest.fn();
        let result = mock('getRandomDog');

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);

        petImage.getRandomDog(response => {
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty( 'message');
            expect(response.status).toBe('success');
            done();
        });

    });

    test('should return url', (done) => {

        const expResponse = {status: 'success', message:'https://'};

        const scope = nock('https://dog.ceo')
            .get ('/api/breeds/image/random')
            .reply(200, expResponse)

        petImage.getRandomDog(actResponse => {
            expect(actResponse).toMatchObject(expResponse)
            done();
        })

    });

    test('should return error if statusCode != 200', (done) => {

        const extResponse = 'Invalid content-type\nExpected application/json but received text/html';

        const scope = nock('https://dog.ceo')
            .get ('/api/breeds/image/random')
            .reply(200, {},{ 'content-type': 'text/html'})

        petImage.getRandomDog(actResponse => {
            console.log(actResponse)
            expect(actResponse).toBe(extResponse)
            done();
        })

    });



});

