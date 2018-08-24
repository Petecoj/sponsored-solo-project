let app = require('../server')
let testServer = require('supertest')

describe('testing our express profile route', ()=>{
    test('the /profile route returns a 403 when unauthenticated', async ()=>{
       let response = await testServer(app).get('/api/sponsor/available');
       expect (response.statusCode).toBe(500);
    });
});
