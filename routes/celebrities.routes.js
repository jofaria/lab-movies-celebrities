const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// ROUTES

// celebrities page

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((allCelebrities) => {
      return allCelebrities;
    })
    .then((allCelebrities) => {
      res.render("celebrities/celebrities", {
        celebritiesList: allCelebrities,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// create a celebrity GET

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

// create a celebrity POST

router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  const celeb = req.body;
  console.log(celeb);
  Celebrity.create(celeb)
    .then((createdCelebrity) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.render("celebrities/new-celebrity");
    });
});

module.exports = router;
