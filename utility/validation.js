const express = require('express');
const {check, validationResult} = require('express-validator/check');

//Validation
var loginValidation = [
  //validate email and password
  check('email')
      .isEmail()
      .withMessage("Provide proper email"),
  check('password')
      .isLength({ min: 8 })
      .withMessage("min password length must be of 8 characters")
      .matches(/^(?=.*[a-z])[a-zA-Z]{8,20}$/)
      .withMessage("Password must contain a valid combination of letters")
      .trim().escape()
];
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

let minAge = new Date(currentYear - 12, currentMonth, currentDay).toDateString();
let maxAge = new Date(currentYear - 100, currentMonth, currentDay).toDateString();

var signUpValidation = [
  //validate first_name, last_name, email, password, dob, phone_number, device_type,
  //device_token, latitude, longitude, is_verified, block_status
  check('first_name')
      .isAlpha().withMessage("Provide only alphabets")
      .isLength({ min: 2}).withMessage("must contains atleast 2 characters")
      .trim().escape(),
  check('last_name')
      .isAlpha().withMessage("Provide only alphabets")
      .isLength({ min: 2}).withMessage("must contains atleast 2 characters")
      .trim().escape(),
  check('email')
      .isEmail().withMessage("Provide proper email"),
  check('password')
      .isLength({ min: 8 }).withMessage("min password length must be of 8 characters")
      .matches(/^(?=.*[a-z])[a-zA-Z]{8,20}$/).withMessage("Password must contain a valid combination of letters")
      .trim().escape(),
  check('dob')
      .isBefore(minAge).withMessage("Min age should be 12 years")
      .isAfter(maxAge).withMessage("Max age should be 100 years")
      .trim().escape(),
  check('phone_number')
      .isNumeric().withMessage("Should be numeric")
      .matches(/^[0-9]{10}$/,"i").withMessage("Enter proper phone number")
      .trim().escape(),
  check('device_type')
      .exists(),
  check('device_token')
      .isLength({min: 6}).withMessage("Should contain at least 6 characters")
      .trim().escape(),
  check('latitude')
      .matches(/^[1-9]\d*(\.\d+)$/).withMessage("should be in the format 12.89..")
      .trim().escape(),
  check('longitude')
      .matches(/^[1-9]\d*(\.\d+)$/).withMessage("should be in the format 12.89..")
      .trim().escape(),
  check('is_verified')
      .isBoolean().withMessage("should be boolean")
      .trim().escape(),
  check('block_status')
      .isBoolean().withMessage('should be boolean')
      .trim().escape()
];

module.exports = { signUpValidation, loginValidation };