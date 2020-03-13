const express = require("express");
const postsRouter = require("./posts/post-router");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>It's working</h2>`);
});

const port = 5000;
server.listen(port, () => {
  console.log(
    `Server Running on http://localhost:${port}`
  );
});