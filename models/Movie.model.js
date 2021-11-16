const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String },
  genre: { type: String },
  plot: { type: String },
  cast: { type: [Object] },
});

const Movie = model("Movie", movieSchema);
module.exports = Movie;
