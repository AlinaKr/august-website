const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/nhan', (req, res, next) => {
  res.render('nhan');
});

module.exports = router;
