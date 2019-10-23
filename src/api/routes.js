import example from './components/example/example.route';

export default (server) => {
  const prefix = '/api';

  example(server, prefix);
};
