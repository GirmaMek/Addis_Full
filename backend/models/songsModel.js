const mongoose = require('mongoose');

const genreOptions = ['Rock', 'Pop', 'Hip Hop', 'Electronic', 'Classical'];

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
    enum: genreOptions,
    required: true
  }
});

const Song = mongoose.model('Song', songSchema);

module.exports = {
  Song:Song,
  genreOptions:genreOptions
};
