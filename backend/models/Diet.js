const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  meals: [
    {
      name: String,
      calories: Number,
      time: String,
    },
  ],
});

module.exports = mongoose.model('Diet', dietSchema);
