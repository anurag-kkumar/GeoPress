

const express = require("express");
const router = express.Router();

const { signup, login, getProfile, forgotPassword } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");


router.post(
  "/signup",
  upload.single("profileImage"),
  signup
);

router.post("/login", login);

router.get("/profile", auth, getProfile);
router.post("/forgot-password", forgotPassword);

module.exports = router;