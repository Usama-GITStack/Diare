const express = require("express");
const rout = express.Router();
const User = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new User.User({
    UserCOde: req.body.UserCOde,
    Name: req.body.Name,
    Phone: req.body.Phone,
    Function: req.body.Function,
    Password: req.body.Password,
    PasswordC: req.body.PasswordC
  });
  console.log(myData);
  myData.save()
    .then(item => {
      res.send({
        success: "Data Is Save",
        status: 500
      });
    })
    .catch(err => {
      res.send({
        fail: "unable to save to database",
      });
    });
});
module.exports = rout;
