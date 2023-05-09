const express = require("express");
const server = express();

server.get("/health", (req, res) => {
  res.send("Hello World");
});

const port = 8080;
server.listen(port, () => {
  console.log(`Hello World ${port}`);
});
