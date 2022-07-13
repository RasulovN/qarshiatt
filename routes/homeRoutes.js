const { Router } = require('express')
const Blog = require('../models/blogModel')
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const superagent = require('superagent')
const quoteGenerateRandom = require('../quote/quote')
const { isAuth } = require('../middlewares/auth');
const router = Router()

// Controllers
const {
    homeControl,
    aboutControl,
    bookController,
    blogsController,
    blogsPostController
} = require('../controller/homeController')

router.get('/', homeControl)
        .get('/about', aboutControl)
        .get('/books', bookController)
        .get('/blogs', blogsController)
        .get('/blogpost', blogsPostController);


module.exports = router