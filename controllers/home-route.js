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

    const loggedIn = req.session.loggedIn;

    const posts = dbcommentData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts)

    res.render('homepage', {
      posts,
      loggedIn
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

router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      // console.log(req.session.userId)
      const userId = req.session.userId

      // Fetch the user's data based on the retrieved ID
      // const userData = await User.findOne({ where: { id: userId } });

      // Fetch the user's comments data, including the associated User model
      const dbcommentData = await Comments.findAll({
        where: { user_id: userId },
        include: [{ model: User, attributes: ['name'] }],
      });

      // Transform the data to plain objects
      const personalPosts = dbcommentData.map((post) => post.get({ plain: true }));
      console.log(personalPosts[0].id)

      res.render('dashboard', { 
        personalPosts, 
        loggedIn: req.session.loggedIn 
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


router.post('/new-post', async (req, res) => {
  try {
    // Get the form data from the request body
    const { postTitle, comment } = req.body;

    // Create a new post using the Comments model
    const newPost = await Comments.create({
      post_title: postTitle,
      comment: comment,
      // Set the user_id based on the logged-in user or any other authentication method you're using
      user_id: req.session.userId, // Assuming you've stored the user ID in req.session.userId
    });

    // Redirect to a success page or the newly created post
    res.redirect(`/dashboard`);
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

router.get('/new-post', (req, res) => {
  res.render('new-post');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
