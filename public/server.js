const { createApp } = require("./app");

require("dotenv").config();

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
