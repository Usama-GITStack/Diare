const express = require("express");
const rout = express.Router();
const ExitV = require("../DataBase/DataBase");
rout.post("/", (req, res) => {
  const myData = new ExitV.ExitV({
    Date: req.body.Date,
    Document: req.body.Document,
    Warehouse: req.body.Warehouse,
    Reception: req.body.Reception,
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
