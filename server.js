const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
  