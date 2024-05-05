import request from 'supertest';
import app from '@/app'; // Assuming your Express app is exported from 'app.js' or similar

describe('Test Express routes', () => {
  it('should return 200 OK for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return 404 Not Found for GET /nonexistent', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
