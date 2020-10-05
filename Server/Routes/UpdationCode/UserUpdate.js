const express = require("express");
const rout = express.Router();
const User = require("../../DataBase/DataBase");
// Data Geting
rout.post("/", (req, res) => {
  console.log("Usama");
  var OldData = {
    UserCOde: req.body.UserCOde,
  };
  var NewData = {
    UserCOde: req.body.UserCOde,
    Name: req.body.Name,
    Phone: req.body.Phone,
    Function: req.body.Function,
    Password: req.body.Password,
    PasswordC: req.body.PasswordC
  }
  User.User.updateOne(OldData, NewData)
    .then(() => {
      res.send({
        success: "Your File Is Update",
        status: 500
      });
    })
    .catch(err => {
      res.status(400).send({
        fail: "Your File Is Not Save",
      });
    });
});
module.exports = rout;
