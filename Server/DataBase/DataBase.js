const mongoose = require("mongoose")

const Customer = mongoose.model("Customer", new mongoose.Schema({
  CustomerCode: String,
  Civility: String,
  LastName: String,
  FirstName: String,
  Phone: String,
  Category: String,
  City: String,
  MadinaAddress: String
}));
const AddArticals = mongoose.model("AddArticals", new mongoose.Schema({
  ItemCode: String,
  Unit: String,
  Nameofthearticle: String,
  CostPrice: String,
  SellingPrice: String,
  Category: String,
  Margin: String
}));
module.exports.Customer = Customer;
module.exports.AddArticals = AddArticals;
