const request = require('supertest');
const app = require('../src/index.js'); 
const mongoose = require('mongoose');

afterAll(async () => {
    await mongoose.connection.close();
    const server = app.listen();
    server.close();
});


describe('Health Check', () => {
    it('should return 200 OK from /api/health', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ status: 'up' });
    });
});