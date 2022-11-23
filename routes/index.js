const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
// router.post("/create-todo-list", homeController.createTodo);

module.exports = router;
