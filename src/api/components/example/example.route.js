import { getAll, getById, save, update, del } from './example.controller';

export default (server, prefix) => {
  server.get(`${prefix}/example`, getAll);
  server.get(`${prefix}/example/:id`, getById);
  server.post(`${prefix}/example`, save);
  server.put(`${prefix}/example/:id`, update);
  server.del(`${prefix}/example/:id`, del);
};
