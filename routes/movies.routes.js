const Movie = require("../models/Movie.model");

const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

// create GET New Movie

router.get("/movies/new-movie", (req, res) => {
  Celebrity.find()
    .then((allCelebrities) => {
      console.log("allCelebrities :>> ", allCelebrities);

      return allCelebrities;
    })
    .then((allCelebrities) => {
      res.render("movies/new-movie", { celebList: allCelebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});

// create post New Movie

router.post("/movies/create", (req, res) => {
  const movie = req.body;

  const { title, genre, plot, cast } = movie;

  Movie.create(movie).then(() => {
    res.render("movies/movies");
  });
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then((moviesArr) => {
      res.render("movies/movies", { moviesList: moviesArr });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  // Movie.findOne({ _id: movieId })
  //   .then((foundMovie) => {
  //     Celebrity.find().then((foundCelebrities) => {
  //       Movie.populate("cast");
  //     });
  //   })
  //   .then(() => {
  //     res.render("movies/movie-details", { foundMovie });
  //   });
});
module.exports = router;
