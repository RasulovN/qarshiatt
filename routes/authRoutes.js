const { Router } = require('express');
const { isAuth } = require('../middlewares/auth');

const authConrol = require('../controller/authController')
const regConrol = require('../controller/regController')
// const adminRout = require('./adminRoutes')

const router = Router()

//login
router.get('/login', isAuth, authConrol.GET)
      .get('/register', isAuth, regConrol.GET)
    //   .get('/admin', isAuth, adminRout)


      
//REGISTER
      router.post('/register', isAuth, regConrol.POST)
            .post('/login',isAuth, authConrol.POST)

//logout
router.get('/logout', (req, res) => {
    req.session.user = undefined
    req.session.isLogged = false
    req.session.destroy()
    res.redirect('/')
})


module.exports = router