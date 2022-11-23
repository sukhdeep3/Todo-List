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
  return res.render("home", {
    title: "Todo App",
    todolist: todolist,
  });
};

// const todolist = [
//   {
//     description: "Hello",
//     categories: "Personal",
//     date: "today",
//   },
//   {
//     description: "Hello2",
//     categories: "Work",
//     date: "tomorrow",
//   },
// ];

// module.exports.createTodo = function (req, res) {
//   return res.render("home", {
//     todolist: todolist,
//   });
// };
