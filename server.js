const express = require("express");
const app = express();
const route = require("./routes/index");
const PORT = process.env.PORT || 3000;
app.use("/", route);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} in your browser`);
});
