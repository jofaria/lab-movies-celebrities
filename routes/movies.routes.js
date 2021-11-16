const Movie = require("../models/Movie.model");

const router = require("express").Router();

router.get("/movies", (req, res) => {
  res.render("movies/movies");
});

router.get("/movies/new-movie", (req, res) => {
  res.render("movies/new-movie");
});

router.post("/movies/create", (req, res) => {});

module.exports = router;
