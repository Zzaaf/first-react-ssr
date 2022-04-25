const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('Home', {
      title: 'First SSR',
      name: 'Express',
    });
  });

module.exports = router;
