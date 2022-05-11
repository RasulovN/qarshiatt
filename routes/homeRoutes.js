const { Router } = require('express')
const Blog = require('../models/blogModel')
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const superagent = require('superagent')
const quoteGenerateRandom = require('../quote/quote')
const { isAuth } = require('../middlewares/auth');
const router = Router()

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().limit(6).sort({$natural: -1}).lean()
        res.render('index', {
            title: 'Home page',
            isLogged: req.session.isLogged,
            blogs: blogs,
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: "About Page"
    })
})

router.get('/books', (req, res) => {
    res.render('pages/books', {
        title: "Books Page"
    })
})
// Pages end

router.get('/blogs', async (req, res) => {
    try{

        const blogs = await Blog.find().lean()

        res.render('pages/allBlogs', {
            title: 'All blogs',
            blogs: blogs.reverse(),
            isLogged: req.session.isLogged,
        })
    } catch(err){
        console.log(err)
    }
})

router.get('/blogpost', async (req, res) => {
    try {
        let slugUrl = req.query.post
        const blogs = await Blog.find().limit(6).lean() 
        const comments = await Comment.find().limit().lean() 
        const user = await User.find().lean() 

        const blog = await Blog.findOne({slugUrl})

        async function updateVistedCount() {    
            let url = `https://api.countapi.xyz/hit/youngproger/${slugUrl}`
            const resp = await superagent.get(url)
            return resp.body.value++
        }

        res.render('post', {
            title: blog.title,
            fullName: user.fullName,
            content: blog.content,
            image: blog.image,
            slugUrl: slugUrl,
            createdAt: blog.createdAt,
            isLogged: req.session.isLogged,
            count: await updateVistedCount(),
            quote: quoteGenerateRandom(),

            blogs: blogs,
            comments: comments,
        })
    } catch(err) {
        console.log(err)
    }
});

// admin dashboard deleted

// router.get('/allUser', isAuth, async(req, res) => {
//     const users = await User.find().lean()
//     // res.render('admin/allUser', {
//     //     title: "All Users",
//     //      users: users.reverse(),
//     //     isLogged: req.session.isLogged,
//     // })
    
//     try {
//         // const { email, password } = req.body
//         const loginIn = req.session.isLogged

//         if(loginIn === true ) {
//             req.flash('logErr', 'Siz Admin emasiz')
//             res.redirect('/')
//         }

//         req.session.user = loginIn
//         // req.session.isLogged = true
//         res.render('admin/allUser')
        
//     } catch(err) {
//         console.log(err)
//     }
// })


// router.get('/adminNews', isAuth,  async(req, res) => {
//     const blogs = await Blog.find().lean()

//     res.render('admin/adminNews', {
//         title: "All news admin", 
//         blogs: blogs.reverse(),
//         isLogged: req.session.isLogged,
//     })
// })

// ADMIN



module.exports = router