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
const EntryV = mongoose.model("EntryV", new mongoose.Schema({
  Date: String,
  Document: String,
  Warehouse: String,
  Reception: String,
}));
const ExitV = mongoose.model("ExitV", new mongoose.Schema({
  Date: String,
  Document: String,
  Warehouse: String,
  Reception: String,
}));
module.exports.Customer = Customer;
module.exports.AddArticals = AddArticals;
module.exports.EntryV = EntryV;
module.exports.ExitV = ExitV;
