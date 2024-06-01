const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name should have atleast 3 characters"],
    maxLength: [15, "First name can have maximum 10 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name should have atleast 3 characters"],
    maxLength: [15, "First name can have maximum 10 characters"],
  },
  email: {
    type: String,
    unique: [true, "Email already Exists"],
    required: [true, 'Email is required'],
    validate: { validator: validator.isEmail , message: 'Please provide a valid email.' }
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false // when someone hit getAllUser api then i do not want to show all user password field to anyone
  },
  isSeller: {
    type: Boolean
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    minLength: [10, "Address should have atleast 10 characters"],
  }
});

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;


