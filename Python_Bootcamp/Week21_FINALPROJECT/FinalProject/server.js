const fastify=require('fastify');
const db=require('./database.js');
const usersRoutes=require('./routes/users.js');
const pagesRoutes=require('./routes/pages.js');


const server=fastify({ logger: true });

usersRoutes.forEach((route, index) => {
    server.route(route);
});

pagesRoutes.forEach((route, index) => {
    server.route(route);
});

server.get('/', async (req,res) => {
    res.json({message: 'API works'})
});

port=3000;
server.listen(port, () => {
  server.log.info(`server listening on ${port}`);
});