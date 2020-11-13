/** @format */

const express = require("express");

const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.get("/", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});
router.post("/", (req, res) => {
  res.json([{ id: 1, content: "hello" }]);
});
router.delete("/", (req, res) => {
  res.json([{ id: 1 }]);
});

module.exports = router;
