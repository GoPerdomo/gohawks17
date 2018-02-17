const express = require('express');
const router = express.Router();

// Require data
const overview = require('../data/overview'),
      players = require('../data/players'),
      needs = require('../data/needs'),
      schedule = require('../data/schedule'),
      footer = require('../data/footer');

// Middleware for all routes
router.use((req, res, next) => {
  res.locals.footer = footer;
  next();
});

router.get('/', (req, res) => {
  res.render('index', overview);
});

router.get('/players', (req, res) => {
  res.render('players', players);
});

router.get('/needs', (req, res) => {
  res.render('needs', needs);
});

router.get('/schedule', (req, res) => {
  res.render('schedule', schedule);
});

module.exports = router;
