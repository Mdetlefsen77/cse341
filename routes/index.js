const route = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

route.get("/", lesson1Controller.baseController);
route.get("/greet", lesson1Controller.greetController);

module.exports = route;
