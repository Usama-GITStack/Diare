const express = require("express");
const rout = express.Router();
const User = require("../DataBase/DataBase");
// Data Geting
rout.get("/", (req, res) => {
  User.User.find({}, (err, findObject) => {
    if (err) {
      res.send({
        msg: "The Error Occure"
      });
    } else {
      if (!findObject) {
        res.send({
          msg: "Data Not Found"
        });
      } else {
        console.log(findObject);
        res.send({
          msg: findObject
        });
      }
    }
  });
});
module.exports = rout;
