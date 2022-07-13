const { Router } = require('express');
const User = require('../models/userModel');
const { isAuth } = require('../middlewares/auth');
const Blog = require('../models/blogModel');
// const { isAdmin } = require('../middlewares/isAdmin')

const router = Router()

router.get('/login', isAuth, async(req, res) => {
    // const blogs = await Blog.find().limit(6).sort({$natural: -1}).lean()
    const users = await User.find().lean()
    
    res.render('auth/login', {
        title: 'Login',
        logErr: req.flash('logErr')[0],
        // blogs: blogs.reverse(),
        users: users.reverse(),
        isLogged: req.session.isLogged,
    })
})


router.get('/register', isAuth, (req, res) => {
    res.render('auth/register', {
        title: 'Register',
        regErr: req.flash('regErr')[0]
    })
})

router.post('/register', isAuth, async (req, res) => {
    try {
        const { fullName, phone, email, password, confirmPassword } = req.body

        const userExist = await User.findOne({ email })
        if(userExist) {
            req.flash('regErr', 'Such a user is available on the site')
            res.redirect('/auth/register')
        }

        if(password.length < 8) {
            req.flash('regErr', 'The password must be at least 8 characters long')
            res.redirect('/auth/register')
        }

        const matchPassword = password === confirmPassword

        if(!matchPassword) {
            req.flash('regErr', 'email or Passwords did not match')
            res.redirect('/auth/register')
        }

        await User.create({
            fullName,
            email,
            phone,
            password
        })

        res.redirect('/auth/login')

    } catch(err) {
        console.log(err)
    }
})


router.post('/login', isAuth, async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email, password })
        // const userExist = userAdmin

        if(!userExist) {
            req.flash('logErr', 'Data entered incorrectly')
            res.redirect('/auth/login')
        }

        const matchPassword = userExist.password === password
        const matchEmail = userExist.email === email

        if(!matchEmail) {
            req.flash('logErr', 'Data entered incorrectly Password, Email')
            res.redirect('/auth/login')
        }
        if(!matchPassword) {
            req.flash('logErr', 'Data entered incorrectly Password Email')
            res.redirect('/auth/login')
        }

        req.session.user = userExist
        req.session.isLogged = true
        res.redirect('/')
        // res.render('pages/admin')
        
    } catch(err) {
        console.log(err)
    }
})


// admin 

// router.get('/admin', isAdmin, (req, res) => {
//     res.render('auth/adminLogin', {
//         title: 'Admin Login',
//         logErr: req.flash('logErr')[0]
//     })
// })
// router.post('/admin', isAuth, async (req, res) => {
//     try {
//         const { email, password } = req.body

//         // const userExist = await User.findOne({ email })
//         const userExist = userAdmin

//         if(!userExist) {
//             req.flash('logErr', 'Data entered incorrectly')
//             res.redirect('/auth/admin')
//         }

//         const matchPassword = userExist.password === password
//         const matchEmail = userExist.email === email

//         if(!matchPassword) {
//             req.flash('logErr', 'Parol notogri')
//             res.redirect('/auth/admin')
//         }
//         if(!matchEmail) {
//             req.flash('logErr', 'Admin Emaili emas')
//             res.redirect('/auth/admin')
//         }

//         req.session.user = userExist
//         req.session.isLogged = true
//         res.render('pages/admin')
        
//     } catch(err) {
//         console.log(err)
//     }
// })


// isAdmin
// router.post('/admin', isAdmin, async (req, res) => {
//     try {
//         const { email, password } = req.body

//         const userExist = await User.findOne({ email })

//         if(!userExist) {
//             req.flash('logErr', 'Data entered incorrectly')
//             res.redirect('/auth/login')
//         }

//         const matchPassword = userExist.password === password

//         if(!matchPassword) {
//             req.flash('logErr', 'Data entered incorrectly')
//             res.redirect('/auth/login')
//         }

//         req.session.user = userExist
//         req.session.isLogged = true
//         res.redirect('/')
        
//     } catch(err) {
//         console.log(err)
//     }
// })

router.get('/logout', (req, res) => {
    req.session.user = undefined
    req.session.isLogged = false
    req.session.destroy()
    res.redirect('/')
})


module.exports = router