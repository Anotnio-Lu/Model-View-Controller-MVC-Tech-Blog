const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
  secret: 'Super secret secret',
  // cookie: {
  //   maxAge: 3,
  //   // httpOnly: true,
  //   // secure: false,
  //   // sameSite: 'strict',
  // },
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
  