var express = require("express");
var router = express.Router();

const messages = [
  { text: "hello!", user: "roger", added: new Date() },
  {
    text: "These are not the droids you are looking for...",
    user: "GLucas",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const { author, message } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
