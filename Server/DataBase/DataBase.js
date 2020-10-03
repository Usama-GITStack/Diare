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
const Warehouse = mongoose.model("Warehouse", new mongoose.Schema({
  WAREHOUSECODE: String,
  NAMEOFWAREHOUSE: String,
  ADDRESS: String,
  NAMEOFMANAGER: String,
  PHONE: String,
}));
const Invoice = mongoose.model("Invoice", new mongoose.Schema({
  DATED: String,
  CLIENTNAME: String,
  DOCUMENTNUMBER: String,
  TOTALAMOUNT: String,
  GOODDELIVERYGENERATE: String,
}));
const NewInvoice = mongoose.model("NewInvoice", new mongoose.Schema({
  Document: String,
  ITEMCODE: String,
  ARTICLENAME: String,
  AMOUNT: String,
  UNITS: String,
  ITEMVALUE: String,
  TOTALVALUE: String,
}));
module.exports.Customer = Customer;
module.exports.AddArticals = AddArticals;
module.exports.EntryV = EntryV;
module.exports.ExitV = ExitV;
module.exports.Warehouse = Warehouse;
module.exports.Invoice = Invoice;
module.exports.NewInvoice = NewInvoice;
