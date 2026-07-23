const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateStatus,
  updateLastLogin,
} = require("../controllers/userController");


// Create User
router.post("/", createUser);

// Get All Users
router.get("/", getUsers);

// Get Single User
router.get("/:id", getUserById);

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

// Update User Status
router.patch("/:id/status", updateStatus);

// Update Last Login
router.patch("/:id/last-login", updateLastLogin);


module.exports = router;
