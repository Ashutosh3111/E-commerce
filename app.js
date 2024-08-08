const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');


mongoose.connect('mongodb://localhost:27017/shopDB')
  .then(() => {         //return promise
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const sessionConfig = {
  secret: 'weneedsomebettersecret',
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {                    //promise
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
})

const productRoute = require('./routes/productRoutes');
const authRoute = require('./routes/authRoutes');
const cartRoute = require('./routes/cartRoutes');

app.get("/", (req, res) => {
  res.render('home');
});

app.get('/error', (req, res) => {
  res.render('error');
})

app.use(productRoute);
app.use(authRoute);
app.use(cartRoute);

app.listen(3000, () => {
  console.log(`Server running on port 3000 🔥`);
});