const express = require('express');
const app = express();
const path = require('path');

const config = require('./config/config');
const routes = require('./routes/index');

// Set pug as template engine
app.set('view engine', 'pug');
app.set('views', path.join(`${__dirname}/views`));

// Use routes
app.use(routes);

// Catch 404 Error
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  if (!err.status) err.status = 500
  res.locals.error = err;
  res.status(err.status).json(err.message);
});

// Listen to port
app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
