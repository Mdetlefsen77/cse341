const greetController = (req, res) => {
  const name = "Martin Detlefsen";
  res.send(`Hello, world!, ${name}`);
};

const baseController = (req, res) => {
  res.send("Welcome to the CSE341 Web Services course!");
};

module.exports = {
  greetController,
  baseController,
};
