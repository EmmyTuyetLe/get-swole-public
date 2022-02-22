const router = require("express").Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const verify = require("../utils/verifyToken");

router
  .post("/register", authController.register)
  .post("/login", authController.login)
  .post("/update", verify, authController.update)
  .get("/logout", verify, authController.logout)
  .post("/forgotPassword", authController.forgotPassword)
  .patch("/resetPassword/:token", authController.resetPassword);

router.route("/").get(userController.getAllUsers);

module.exports = router;
