const express = require("express");
// initialize express
const app = express();
// creates port
const PORT = process.env.PORT || 3001;

// require routes
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");
// middleware

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
