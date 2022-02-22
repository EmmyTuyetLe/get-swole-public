const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const { Schema } = mongoose;

UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "field cannot be blank"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "field cannot be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

UserSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.password) {
    const hashed = await bcrypt.hash(this._update.password, 10);
    this._update.password = hashed;
  }
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateJWT = function (id) {
  let token = jwt.sign({ _id: id }, process.env.JWT_SECRET);
  return token;
};

//Generate Reset Token
UserSchema.methods.createPasswordResetToken = function () {
  //Create reset token
  const resetToken = crypto.randomBytes(32).toString("hex");

  //Hash and save the token into the database
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //set expiry time
  this.passwordResetExpires = Date.now() + 10 * 60 * 10000;

  //return reset token
  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
