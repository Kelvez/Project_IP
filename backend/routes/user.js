const express = require('express');
const auth = require("../middlewares/auth");
const { logout } = require('../services/logout');
const userService = require("../services/user");
var router = express.Router();

router.get('/users', auth.ensureSignedIn, async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
})

router.post('/update-password', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  const {password} = req.body;
  const { currentUser } = req;
  const updatedPass = await userService.updatePassword(currentUser?._id, password);
  res.json(updatedPass);
})

router.post('/update-user', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  const {username} = req.body;
  const { currentUser } = req;
  const updatedUsername = await userService.updateUsername(currentUser?._id, username);
  res.json(updatedUsername);
})

router.post('/delete-user', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  const { currentUser } = req;
  const deletedUser = await userService.deleteById(currentUser?._id);
  logout(req.session);
  res.json(deletedUser);
})

router.get('/:id', auth.ensureSignedIn, auth.currentUser, async (req, res) => {
  const { id } = req.params;
  const result = await userService.findById(id);
  res.json(result);
})

module.exports = router;