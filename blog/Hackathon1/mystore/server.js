//import your libraries
const fastify=require('fastify');
const db=require('./database'); //this links the database
const ProductRoutes=require('./routes/products'); //this links the routes



//define server
const server = fastify({
  logger: true
})

//link routes
ProductRoutes.forEach((route,index) =>{
  server.route(route);
});


//define routes
server.get('/', (request, response) => {
  response.json({message: 'Hello World!'});
});


//start server
port=3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});