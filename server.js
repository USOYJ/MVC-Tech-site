const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./controllers');
const sequelize = require('../MVC-Tech-site/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});


const sess = {
  secret: 'Super oyin secret',
  cookie: {
    maxAge: 86400000, 
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);


sequelize.sync({ force: false }) 
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

