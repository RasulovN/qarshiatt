const User = require('../models/userModel');
const { isAuth } = require('../middlewares/auth');
const bcrypt = require('bcryptjs')
const Joi = require('joi');
const jwt = require('jsonwebtoken')

    const JWT_SECRET = 'secretKey123'

module.exports = { 
    GET: async (req, res) => {
    try {
        const users = await User.find().lean()
        res.render('auth/login', {
            title: 'Login',
            logErr: req.flash('logErr')[0],
            // blogs: blogs.reverse(),
            users: users.reverse(),
            isLogged: req.session.isLogged,
    })
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Bad request"
        })
    }
    },
    POST: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email }).lean()
            const isAdmin = user.isAdmin === true
            if (!isAdmin) {
                // return res.json({ status: 'error', error: 'Invalid username/password1' })
                req.flash('logErr', "admin bo'lmaganligi uchun rad etildi")
                return res.redirect('/auth/login')
            }
            if (!user) {
                // return res.json({ status: 'error', error: 'Invalid username/password1' })
                req.flash('logErr', "Email yoki parol noto'gri")
                return res.redirect('/auth/login')
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword){
                // return res.status(400).send('Email yoki parol noto\'g\'ri');
                req.flash('logErr', "Email yoki parol noto'g'ri p")
                return res.redirect('/auth/login');
            }
    
            // const token = jwt.sign(
            //     {
            //         id: user._id,
            //         email: user.email,
            //         password: user.password
            //     },
            //     JWT_SECRET
            // )
    
            // return res.json({ status: 'ok', data: token })
            req.session.user = user
            req.session.isLogged = true
            res.redirect('/')
            // console.log(`successfly:  
            //             ${user.email} 
            //             ${user.password} 
            //             ${token}`);
        
        }catch(err){
            req.flash('logErr', 'Invalid username/password')
            return res.redirect('/auth/login')
            // console.log(err);
            // res.json({ status: 'error', error: 'Invalid username/password' })
        } 
    },
}