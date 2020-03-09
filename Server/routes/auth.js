const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.json();
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/api/",
  failureRedirect: "/api/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.json();
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.json();
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json();
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
      .then(() => {
        res.json();
      })
      .catch(err => {
        res.json("auth/signup", { message: "Something went wrong" });
      })
  });
});


router.get('/currentuser', (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    next(new Error('Not logged in'))
  }
})

router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
