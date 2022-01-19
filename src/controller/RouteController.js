const { Route, sequelize } = require('../models');

class RouteController {
  async findAll(req, res, next) {
    try {
      // let query = sequelize.query();
      const a = await Route.findAll();
      return res.json({ a });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new RouteController();
