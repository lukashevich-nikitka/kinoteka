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
  } else {
    fs.writeFile(
      "databases/users.json",
      JSON.stringify([...users, { ...req.body, role: 'user' }]),
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

router.post("/login", async (req, res) => {
  const userIndex = [...users].findIndex((el) => {
    return el.email === req.body.email && el.password === req.body.password
  })
  if (userIndex === -1) {
    res.json('Пользователя с такими данными не существует!');
  } else {
    const jwtToken = jwt.sign({
      name: users[userIndex].name,
      surname: users[userIndex].surname,
      role: users[userIndex].role
    }, secretKey);
    res.json({ token: jwtToken, message: 'jwt отправлен' });
  }
})

router.get("/userRights/:token", async (req, res) => {
  console.log(`token: ${req.params.token}`)
  if (req.params.token !== 'unknown') {
    let personRole = jwt.verify(req.params.token, secretKey);
    res.json(personRole);
  } else {
    personRole = { name: 'Неизвестный пользователь', role: 'unknown' }
    res.json(personRole);
  }
})

router.post("/saveComment", async (req, res) => {
  if ([...films].some((el) => el.name === req.body.name)) {
    const index = [...films].findIndex((el) => el.name === req.body.name);
    const filmsArray = [...films];
    filmsArray[index].comments = [...filmsArray[index].comments, req.body.comment];
    res.json({ currentComments: [...filmsArray[index].comments], index: index });
    fs.writeFile(
      "databases/films.json",
      JSON.stringify(filmsArray),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    )
  }
})

router.get("/filmsComments", async (req, res) => {
  const defaultCommentsList = [...films].map(function (el) {
    return { name: el.name, comments: el.comments }
  })
  res.json(defaultCommentsList)
})

router.post("/addFilm", async (req, res) => {
  if ([...films].some((el) => el.name === req.body.name)) {
    res.json("Фильм с таким названием уже существует!")
  } else {
    fs.writeFile("databases/films.json", JSON.stringify([req.body, ...films]),
      (err) => {
        if (err) {
          console.log(err);
        }
      });
    res.json([req.body, ...films]);
  }
})

module.exports = router;