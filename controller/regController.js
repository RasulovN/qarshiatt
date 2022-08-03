const User = require('../models/userModel');
const { isAuth } = require('../middlewares/auth');
const bcrypt = require('bcryptjs')
const Joi = require('joi');
const jwt = require('jsonwebtoken')

module.exports = {
    GET: async (req, res) => {
        try {
            res.render('auth/register', {
                title: 'Register',
                regErr: req.flash('regErr')[0]
            })
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { fullName, phone, email, password: newpassword, confirmPassword } = req.body
    
            const userExist = await User.findOne({ email, })
            if(userExist) {
                req.flash('regErr', 'Such a user exists')
                return res.redirect('/auth/register')
            }
    
            if(confirmPassword.length < 6) {
                req.flash('regErr', 'The password must be at least 6 characters long')
                return res.redirect('/auth/register')
            }
    
            const matchPassword = newpassword === confirmPassword
    
            if(!matchPassword) {
                req.flash('regErr', 'email or Passwords did not match')
                return res.redirect('/auth/register')
            }
    
            const password = await bcrypt.hash(newpassword, 10)
            // try {
                const response = await User.create({
                    fullName,
                    email,
                    phone,
                    password
                })
                console.log('User created successfully: ' + response)
            // } catch (error) {
                // if (error.code === 11000) {
                    // duplicate key
                    // return res.json({ status: 'error', error: 'Username already in use' })
                // }
                // throw error
            // }
        
            // res.json({ status: 'ok' })
            res.redirect('/auth/login')
        } catch(err) {
            console.log(err)
        }
    },

    // PUT: async(req,res)=>{
    //     try {
           
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // },
    // DELETE: async (req, res) => {
    //     try {
           
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}