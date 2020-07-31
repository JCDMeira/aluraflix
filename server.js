/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
const jsonServer = require('json-server');

const server = create();
const router = _router('db.json');
const middlewares = defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});
