import supertest from 'supertest';
import server from '../server';

const request = supertest(server);

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