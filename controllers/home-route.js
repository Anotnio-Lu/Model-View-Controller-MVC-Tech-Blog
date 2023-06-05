const router = require('express').Router();
const { Comments, User } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbcommentData = await Comments.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = dbcommentData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts)

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/homepage', async (req, res) => {
  try {
    const dbcommentData = await Comments.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = dbcommentData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts)

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
