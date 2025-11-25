import express from 'express';
//create a server by http
import { createServer } from 'node:http';

const app = express();

//create server
const server = createServer(app);

//routes
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});