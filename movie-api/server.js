const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./models/Movie')
const app = express();
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
//                mongodb+srv://saravana:saravana@cluster0.yuhcrq9.mongodb.net/?retryWrites=true&w=majority/movies
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  const token = req.headers.authorization;

  if (token === 'Bearer FSMovies2023') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/movies/:id', async (req, res) => {
  const movieId = req.params.id;

  try {
    // console.log(movieId);
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
