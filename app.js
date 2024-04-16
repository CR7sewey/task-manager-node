const express = require("express");
const app = express();
const routes = require("./routes/tasksRoute");
const connectDB = require("./db/db-connection");
require("dotenv").config();

// static assets
app.use(express.static("./public"));
// parse form data (middle)
// Podemos por formularios para dentro da nossa app
app.use(express.urlencoded({ extended: false })); // para o que se recebe do forms!!
// Podemos por json para dentro da nossa app
// parse json
app.use(express.json());

app.use("/api/v1/tasks", routes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
