const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/players', (req, res) => {
  res.render('players');
});
router.get('/needs', (req, res) => {
  res.render('needs');
});
router.get('/schedule', (req, res) => {
  res.render('schedule');
});

module.exports = router;
