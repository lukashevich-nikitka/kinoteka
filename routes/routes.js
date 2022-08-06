const { Router } = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const users = require("../databases/users.json");
const films = require("../databases/films.json");
const secretKey = require("../secretKey.json");

const router = Router();

router.post("/auth", async (req, res) => {
  if ([...users].some((el) => el.email === req.body.email)) {
    res.json("Пользователь с таким email уже существует!");
    console.log('herehere')
  } else {
    fs.writeFile(
      "databases/users.json",
      JSON.stringify([...users, req.body]),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    res.json("Вы успешно прошли регистрацию!")
  }
});

router.get("/films", async (req, res) => {
  ([...films].length === 0) ? res.json('На данный момент нам нечего Вам показать, заходите к нам позже!') : res.json([...films]);
  console.log('Список фильмов отправлен!');
})

module.exports = router;