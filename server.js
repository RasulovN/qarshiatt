const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const path = require('path')
const fileUpload = require('express-fileupload')
const flash = require('express-flash')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const connectDB = require('./config/db')
const bodyParser = require("body-parser");
const cool = require('cool-ascii-faces');
const config = require('config');
// init env variables
dotenv.config()

// files
// const {  SECRET_KEY } = require("./config/config")
//  console.log(SECRET_KEY)

if(!config.get('Customer.port')){
  console.error("PORT ozgaruvchisi aniqlanmadi");
  process.exit(1);
}
// if(!config.get('Customer.SECRET_KEY')){
//   console.error("SECRET_KEY ozgaruvchisi aniqlanmadi");
//   process.exit(1);
// }

const app = express()
app.use(fileUpload())

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const store = new MongoStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions'
})

// Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: process.env.SECRET_KEY,
    store: store,
    resave: true,
    saveUninitialized: true
}))

app.use(flash())

// Create static public folder
app.use(express.static('public'))
app.use(express.static('public/css'))
app.use(express.static('public/js'))
app.use(express.static('public/assets'))
app.set('views', path.join(__dirname, 'views'));

// Set hbs shablonizator
app.engine('hbs', exphbs({extname: 'hbs'}))
app.set('view engine', 'hbs')

app.get('/cool', (req, res) => res.send(cool()))
// app.get('/times', (req, res) => res.send(showTimes()))

// showTimes = () => {
//   let result = '';
//   const times = process.env.TIMES || 5;
//   for (i = 0; i < times; i++) {
//     result += i + ' ';
//   }
//   return result;
// }

app.use('/', require('./routes/homeRoutes'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/dash', require('./routes/adminRoutes'))
app.use('/post', require('./routes/postRoutes'))
app.use('/send', require('./routes/commentRoutes'))
// catch 404 and forward to error handler
app.get('*', function(req, res){
  res.status(404).send(
      `
      <h1 style="color: green; text-align: center; ">Page Not Found 404</h1>
      <a href='/' style="color: blue; text-align: center; text-decoration: none;">Home Page</a>
      `, 404);
});

  // production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
  
connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})