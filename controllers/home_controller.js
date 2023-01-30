const Todo = require("../models/todo");

const todolist = [
  {
    description: "Hello",
    categories: "Personal",
    date: "today",
  },
  {
    description: "Hello2",
    categories: "Work",
    date: "tomorrow",
  },
];

module.exports.home = function (req, res) {
  Todo.find({}, function (err, todolist) {
    if (err) {
      console.log("Error in updating data", err);
      return;
    }
    return res.render("home", {
      title: "Todo App",
      todolist: todolist,
    });
  });
};

module.exports.createTodo = function (req, res) {
  // console.log(req.body);
  Todo.create(req.body, function (err, todolist) {
    if (err) {
      console.log("Error in updating data", err);
      return;
    }
    console.log("Updated", todolist);
    return res.redirect("back");
  });
};

module.exports.delete_task = async function (req, res) {
  let ids = req.body.ids;
  // console.log(ids);

  if (typeof ids === "String") {
    ids = [ids];
  }

  let deleted = await Todo.deleteMany({
    _id: {
      $in: ids,
    },
  });
  return res.redirect("back");
};
