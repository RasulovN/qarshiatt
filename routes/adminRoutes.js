var express = require('express');
var path = require('path');
const Blog = require('../models/blogModel')
const User = require('../models/userModel');
const Comment = require('../models/commentModel')
const superagent = require('superagent')
const { isAuth, protected } = require('../middlewares/auth');
const route = express.Router()

route.get('/', protected, async(req, res)=> {
    try {

        const blogs = await Blog.find().lean()
        const user = await User.find().lean()
        const comments = await Comment.find().limit().lean()
        res.render('admin/admin', {
            title: 'Admin dashboard',

            logErr: req.flash('logErr')[0],
            isLogged: req.session.isLogged,
            blogs: blogs.reverse(),
            comments: comments.reverse(),
            users: user,
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = route;