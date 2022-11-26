const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.post("/create-todo", homeController.createTodo);
router.post("/delete_task", homeController.delete_task);

module.exports = router;
