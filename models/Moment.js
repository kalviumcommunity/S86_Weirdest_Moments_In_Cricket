const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  teamA: String,
  teamB: String,
  matchDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Moment', momentSchema);
