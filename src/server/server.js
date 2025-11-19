require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');
const testRoutes = require('./routes/test');

const errorHandler = require('./middleware/errorHandler');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/tests', testRoutes);

app.use(errorHandler);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening
    app.listen(process.env.PORT, () => {
      console.log(
        'connected to db, listening on http://localhost:' + process.env.PORT,
      );
    });
  })
  .catch(error => {
    console.log(error);
  });
