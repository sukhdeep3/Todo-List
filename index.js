const express = require("express");
const port = 8000;

const app = express();

app.use("/", require("./routes"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(port, function (err) {
  if (err) {
    console.log("Error in loading server", err);
    return;
  }
  console.log("Server is running on port:", port);
});
