import { response } from 'express';
import request from 'supertest';

import { app } from '@shared/infra/http/app';

describe('Create Category Controller', () => {
  it('Should be able to create a new category', async () => {
    await request(app).get('/categories').send({
      name: 'Category Supertest',
      description: 'Category Supertest',
    });

    expect(response.status).toBe(201);
  });
});
