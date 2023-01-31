const express = require('express');
const { registerUser, loginUser, logout, getUser } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logout)
router.get("/getuser", protect, getUser)
router.get("/", protect, getUser)

module.exports = router;

