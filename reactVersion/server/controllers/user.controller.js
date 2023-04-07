const { verifyToken } = require("../middlewares/authJwt");
const User = require("../models/user.model");

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

exports.getUserByID =(req, res) => {
  User.findById(verifyToken())
    .then(user => res.json(user))
    .catch(err => res.json(err))
}