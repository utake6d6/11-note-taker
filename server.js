const express = require("express");

// initialize express
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");
const app = express();

// creates port
const PORT = process.env.PORT || 3001;

// middleware:
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// files downloaded from the server, create new directory, public
app.use(express.static("public"));

// routes
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
