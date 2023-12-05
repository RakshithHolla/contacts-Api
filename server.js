const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()) // Express built in middleware to handle body parsing
app.use("/api/contacts", require("./routes/contactRoutes")); // Middleware to handle the routes
app.use(errorHandler) // Custom middleware to handle data error

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
