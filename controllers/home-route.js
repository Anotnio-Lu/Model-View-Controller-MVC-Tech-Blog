const router = require('express').Router();
const { Posts, User} = require('../models');
const Comment = require('../models/Comments');


// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbcommentData = await Posts.findAll({
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
    const dbcommentData = await Posts.findAll({
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


    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  try {
    const dbData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = dbData.get({ plain: true });

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(comments)

    res.render('post', {
      post,
      comments,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const userId = req.session.userId

      const dbcommentData = await Posts.findAll({
        where: { user_id: userId },
        include: [{ model: User, attributes: ['name'] }],
      });

      const personalPosts = dbcommentData.map((post) => post.get({ plain: true }));

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
    const { postTitle, comment } = req.body;

    const newPost = await Posts.create({
      post_title: postTitle,
      comment: comment,
      user_id: req.session.userId, 
    });

    res.redirect(`/dashboard`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/comments', async (req, res) => {
  try {
    const { postId, comment } = req.body;
    console.log(req.body)

    const userId = req.session.userId;

    const newComment = await Comment.create({
      post_id: postId,
      user_id: userId,
      content: comment,
    });

    const dbData = await Posts.findByPk(postId, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = dbData.get({ plain: true });

    const commentData = await Comment.findAll({
      where: {
        post_id: postId,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(comments)

    res.render('post', {
      post,
      comments,
      loggedIn: req.session.loggedIn 
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to create comment' });
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
