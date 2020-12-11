const express = require("express");
// initialize express
const app = express();
// creates port
const PORT = process.env.PORT || 3001;

// require routes

// middleware

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
