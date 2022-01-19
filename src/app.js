const express = require('express');
const RouteController = require('./controller/RouteController');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use('/', RouteController.findAll);
  }
}

module.exports = new App().server;

//import routes from './routes';
