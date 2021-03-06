const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const path = require('path')
const fileUpload = require('express-fileupload')
const flash = require('express-flash')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const connectDB = require('./config/db')
// const product = require("./api/product")
const bodyParser = require("body-parser");
const cool = require('cool-ascii-faces');
// init env variables
dotenv.config()

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

// app.get('/api/product', product)
// app.use('/', product)
app.use('/', require('./routes/homeRoutes'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/post', require('./routes/postRoutes'))
app.use('/send', require('./routes/commentRoutes'))
// catch 404 and forward to error handler
app.get('*', function(req, res){
  res.send(
      `
      <h2 style="color: green;">Page Not Found 404</h2>
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