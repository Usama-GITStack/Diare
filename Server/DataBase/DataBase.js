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
const ExitInvoice = mongoose.model("ExitInvoice", new mongoose.Schema({
  Document: String,
  ITEMCODE: String,
  ARTICLENAME: String,
  AMOUNT: String,
  UNITS: String,
  ITEMVALUE: String,
  TOTALVALUE: String,
}));
const NewWarehouseStuff = mongoose.model("NewWarehouseStuff", new mongoose.Schema({
  WAREHOUSECODE: String,
  ITEMNAME: String,
  QUANTITYINSTOCK: String,
  UNITS: String,
}));
const ReciptInvoice = mongoose.model("ReciptInvoice", new mongoose.Schema({
  FACTNUMBER: String,
  Date: String,
  Warehouse: String,
  FirstName: String,
  LastName: String,
  Email: String,
  Phone: String,
  Address: String,
  InvoiceData: [{
    DESCRIPTION: String,
    AMOUNT: String,
    UNIT: String,
    SELLINGPRICE: String,
    TOTAL: String
  }],
  TotalInvoice: String
}));
const User = mongoose.model("User", new mongoose.Schema({
  UserCOde: String,
  Name: String,
  Phone: String,
  Function: String,
  Password: String,
  PasswordC: String,
}));
const Rules = mongoose.model("Rules", new mongoose.Schema({
  RC: String,
  Date: String,
  CC: String,
  CN: String,
  PM: String,
  Bank: String,
  Checkout: String,
  Amount: String
}));
const Checkout = mongoose.model("Checkout", new mongoose.Schema({
  RN: String,
  Date: String,
  Amount: String,
  EXPENDITURE: String,
  CM: String,
  Wording: String,
}));
module.exports.Customer = Customer;
module.exports.AddArticals = AddArticals;
module.exports.EntryV = EntryV;
module.exports.ExitV = ExitV;
module.exports.Warehouse = Warehouse;
module.exports.Invoice = Invoice;
module.exports.NewInvoice = NewInvoice;
module.exports.ExitInvoice = ExitInvoice;
module.exports.NewWarehouseStuff = NewWarehouseStuff;
module.exports.ReciptInvoice = ReciptInvoice;
module.exports.User = User;
module.exports.Rules = Rules;
module.exports.Checkout = Checkout;
