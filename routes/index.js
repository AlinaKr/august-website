const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/nicole', (req, res, next) => {
  res.render('nicole')
})

module.exports = router;
