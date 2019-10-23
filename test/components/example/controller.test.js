/* eslint-disable no-underscore-dangle */
import request from 'supertest';
import { expect } from 'chai';
import Example from '../../../src/api/components/example/example.model';

import server from '../../../src/api/server';

const prefix = '/api';

describe(`${prefix}/example`, () => {
  after(() => Example.deleteMany());

  describe('should return all examples', () => {
    it('GET /', async () => {
      const req = await request(server).get(`${prefix}/example`);

      expect(req.status).to.equal(200);
    });
  });

  describe('GET /:id', () => {
    it('should return a example if valid id is passed', async () => {
      const example = new Example({
        name: 'Marco Bruno',
      });
      await example.save();

      const req = await request(server).get(`${prefix}/example/${example._id}`);

      expect(req.status).to.equal(200);
      expect(req.body).to.have.property('name', example.name);
    });
  });

  describe('POST /', () => {
    it('should return example when the all request body is valid', async () => {
      const example = {
        name: 'Marco Bruno',
      };

      const req = await request(server)
        .post(`${prefix}/example`)
        .send(example);

      expect(req.status).to.equal(201);
      expect(req.body).to.have.property('_id');
      expect(req.body).to.have.property('name', example.name);
    });
  });

  describe('PUT /', () => {
    it('should return updated example', async () => {
      const updateExample = {
        name: 'Luna Jardim Bruno',
      };

      const example = new Example({
        name: 'Henri Jardim Bruno',
      });
      await example.save();

      const res = await request(server)
        .put(`${prefix}/example/${example._id}`)
        .send(updateExample);

      expect(res.status).to.equal(200);
      expect(res.body.name).to.equal(updateExample.name);
    });
  });

  describe('DELETE /', () => {
    it('should delete example', async () => {
      const example = new Example({
        name: 'Marco Bruno',
      });
      await example.save();

      const res = await request(server).del(`${prefix}/example/${example._id}`);

      expect(res.status).to.equal(200);
    });
  });
});
