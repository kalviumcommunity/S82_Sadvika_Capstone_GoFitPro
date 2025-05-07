const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();


// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));

// Route imports
const authRoutes = require("./routes/auth");
const otpRoutes = require("./routes/otpRoutes"); // ✅ ADD THIS LINE
const WORKOUT_ROUTES = require('./routes/workout');
const DIET_ROUTES = require('./routes/diet');
const COACH_ROUTES = require('./routes/coach');
const MESSAGE_ROUTES = require('./routes/message');
const USER_ROUTES = require('./routes/user');


// Mount routes
app.use("/api/auth", authRoutes);
app.use("/otp", otpRoutes); // ✅ MOUNT OTP ROUTES
app.use('/api/users', USER_ROUTES);
app.use('/api/workouts', WORKOUT_ROUTES);
app.use('/api/diets', DIET_ROUTES);
app.use('/api/coaches', COACH_ROUTES);
app.use('/api/messages', MESSAGE_ROUTES);

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
