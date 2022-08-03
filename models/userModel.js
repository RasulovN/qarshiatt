// const { Schema, model } = require('mongoose')
const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    phone: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    }
  }, {
    timestamps: true
});

const model = mongoose.model('users', userSchema)

module.exports = model