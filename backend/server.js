const express = require("express");
const app = express();
const route = require("./src/routes/w1Routes");
const connectDB = require("./src/config/mongoose");
const config = require("./src/config/config");
const PORT = config.port;

connectDB();

app.use("/", route);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} in your browser`);
});
