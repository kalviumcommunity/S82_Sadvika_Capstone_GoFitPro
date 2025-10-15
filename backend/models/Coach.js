const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: String,
  specialization: [String],
  bio: String,
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Coach', coachSchema);
