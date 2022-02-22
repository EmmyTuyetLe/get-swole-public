const { response } = require("express");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const Workout = require('../models/Workout');

const {
  registerValidation,
  loginValidation,
  updateValidation,
} = require("../utils/validation");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

//Registration
exports.register = asyncHandler(async (req, res, next) => {
  //Validate data before registering a user
  const { error } = registerValidation(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  //Check if email is already in use
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) return next(new AppError(400, "Email is already in use"));
  //Create and assign a token
  const token = user.generateJWT(user._id);
  res.cookie("authToken", token, {
    httpOnly: true,
    // secure: true
  });
  res.status(200).json({
    status: "success",
    message: "User registration successful!",
  });
});

//Login
exports.login = asyncHandler(async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) return next(new AppError(400, error.details[0].message));

  //Check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError(400, "User not found"));

  //Check if password is valid
  let validPass = await user.isValidPassword(req.body.password);
  if (!validPass)
    return next(new AppError(400, "Email or password is invalid"));

  //Create and assign a token
  const token = user.generateJWT(user._id);
  res.cookie("authToken", token, {
    httpOnly: true,
    // secure: true
  });
  res.status(200).json({
    status: "success",
    message: "Login successful",
  });
});

//Edit
exports.update = asyncHandler(async (req, res, next) => {
  const { error } = updateValidation(req.body);
  if (error) return next(new AppError(400, error.details[0].message));

  await User.findOneAndUpdate({ _id: req.user._id }, req.body);

  res.send("Update successful");
});

//Logout
exports.logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("authToken");
  res.status(200).json({
    status: "success",
    message: "Logout successful",
  });
});

//Forgot password. Sends user a reset token via email
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  //   get user based on email
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return next(new AppError(404, "There is no user with that email address"));

  //Generate reset token, save hased version in DB and save changes
  const resetToken = user.createPasswordResetToken();

  await user.save({ validateBeforeSave: false });

  //create link with reset token
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/user/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a patch request to ${resetURL} with your new password. \n If you did not forget, ignore this email`;

  //Send Email
  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token is valid for 10 minutes",
      message,
    });
  } catch (err) {
    return next(
      new AppError(
        500,
        "Something went wrong. Email was not sent. Please contact website admin"
      )
    );
  }

  res.status(200).json({
    status: "successful",
    message: "Token sent to email",
  });
});

//Reset Password
exports.resetPassword = asyncHandler(async (req, res, next) => {
  //Hash token in req.params
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  //Find user that has hashed token
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) return next(new AppError(404, "token is invalid or has expired"));

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  const token = user.generateJWT(user._id);
  res.cookie("authToken", token, {
    httpOnly: true,
    // secure: true
  });

  res.status(200).json({
    status: "success",
    message: "Password successfully reset",
  });
});
