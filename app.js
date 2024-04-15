const express = require("express");
const app = express();
const routes = require("./routes/tasksRoute");

// static assets
app.use(express.static("./public"));
// parse form data (middle)
// Podemos por formularios para dentro da nossa app
app.use(express.urlencoded({ extended: false })); // para o que se recebe do forms!!
// Podemos por json para dentro da nossa app
// parse json
app.use(express.json());

app.use("/api/v1/tasks", routes);

app.listen(5000, () => console.log("Im listening..."));
