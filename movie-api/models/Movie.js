const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  backdrop: String,
  cast: [String],
  classification: String,
  director: [String],
  genres: [String],
  imdb_rating: Number,
  length: String,
  overview: String,
  poster: String,
  released_on: Date,
  slug: String,
});

module.exports = mongoose.model('Movie', movieSchema);
