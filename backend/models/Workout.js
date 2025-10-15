const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  exercises: [
    {
      name: String,
      sets: Number,
      reps: Number,
      duration: String,
    },
  ],
});

module.exports = mongoose.model('Workout', workoutSchema);

