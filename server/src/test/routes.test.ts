import supertest from 'supertest';
import server from '../server';

const request = supertest(server);

describe('sasadasd',  () => {
    it('Testing to see if Jest works', () => {
        expect(1).toBe(1)
    })
});

it('Gets All beer recipes endpoint', async done => {
    // Sends GET Request to / endpoint
    const response = await request.get('/getAllBeerRecipes')
    expect(response.status).toBe(200)
    console.log('message', response.message)
    done()
})

it('Search beer recipes endpoint', async done => {
    // Sends GET Request to / endpoint
    const response = await request.get('/search/Buzz')
    expect(response.status).toBe(200)
    console.log('message', response.message)
    done()
})

it('Default server app endpoint', async done => {
    // Sends GET Request to / endpoint
    const response = await request.get('/')
    expect(response.status).toBe(200)
    console.log('message', response.message)
    done()
})