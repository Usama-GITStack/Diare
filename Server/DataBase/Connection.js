//Initialization
const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
//Paths
const CR = require("../Routes/CustomerRegistration");
const AA = require("../Routes/AddArtical");
const CG = require("../Routes/CustomerListGet");
const AG = require("../Routes/ArticalDataGet");
const AddEV = require("../Routes/AddEV");
const AddEV1 = require("../Routes/AddEV1");
const AddWareouse = require("../Routes/AddWareouse");
const GetEntryV = require("../Routes/GetEntryV");
const GetExitV = require("../Routes/GetExitV");
const GetWarehouse = require("../Routes/GetWarehouse");
const AddInvoice = require("../Routes/AddInvoice");
const GetInvoice = require("../Routes/GetInvoice");
const AddNewVoucher = require("../Routes/AddNewVoucher");
const FinderNewVoucher = require("../Routes/FinderNewVoucher");
const AddExitVoucher = require("../Routes/AddExitVoucher");
const FinderExitVoucher = require("../Routes/FinderExitVoucher");
const AddWS = require("../Routes/AddWS");
const FinderWS = require("../Routes/FinderWS");
const AddUser = require("../Routes/AddUser");
const UserList = require("../Routes/GetUser");
const AddRules = require("../Routes/AddRules");
const ListRules = require("../Routes/GetRules");
const AddCheckOuts = require("../Routes/AddCheckOuts");
const GetCheckout = require("../Routes/GetCheckout");
const CustomerListUpdate = require("../Routes/UpdationCode/CustomerListUpdate");
const ArticalUpdate = require("../Routes/UpdationCode/ArticalUpdate");
const NewEntryV = require("../Routes/UpdationCode/NewEntryV");
const ExitVUpdate = require("../Routes/UpdationCode/ExitVUpdate");
const WarehouseUpdate = require("../Routes/UpdationCode/WarehouseUpdate");
const InvoiceUpdate = require("../Routes/UpdationCode/InvoiceUpdate");
const UpdateRules = require("../Routes/UpdationCode/UpdateRules");
const CheckoutUpdate = require("../Routes/UpdationCode/CheckoutUpdate");
const UserUpdate = require("../Routes/UpdationCode/UserUpdate");
const CustomerRemove = require("../Routes/RemoveCode/CustomerRemove");
const ArticalRemove = require("../Routes/RemoveCode/ArticalRemove");
const EntryVRemove = require("../Routes/RemoveCode/EntryVRemove");
const ExitVRemove = require("../Routes/RemoveCode/ExitVRemove");
const WarehouseRemove = require("../Routes/RemoveCode/WarehouseRemove");
const InvoiceRemove = require("../Routes/RemoveCode/InvoiceRemove");
const RulesRemove = require("../Routes/RemoveCode/RulesRemove");
const CheckOutRemove = require("../Routes/RemoveCode/CheckOutRemove");
const UserRemove = require("../Routes/RemoveCode/UserRemove");
//DataBase
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://osama:mahmood12@cluster0-4lwks.gcp.mongodb.net/Diare?retryWrites=true&w=majority", {
    useNewUrlParser: true
  }).then(() => {
    console.log("Connection with MongoDB......");
  })
  .catch(err => console.log("Could Not Connect", err));
//POST Opration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//Cors
app.use(cors());
//Connection Paths
app.use("/RegisterCustomer", CR);
app.use("/AddArticals", AA);
app.use("/CustomerList", CG);
app.use("/ListofArticals", AG);
app.use("/AddEntryVouchers", AddEV);
app.use("/AddExitVouchers", AddEV1);
app.use("/AddNewWarehouse", AddWareouse);
app.use("/ListOfEntryVouchers", GetEntryV);
app.use("/ListOfExitVouchers", GetExitV);
app.use("/ListofWarehouse", GetWarehouse);
app.use("/NewInvoice", AddInvoice);
app.use("/InvoiceList", GetInvoice);
app.use("/NewEntryVouchers", AddNewVoucher);
app.use("/NewEntryVouchers1", FinderNewVoucher);
app.use("/Newgoodexit", AddExitVoucher);
app.use("/Newgoodexit1", FinderExitVoucher);
app.use("/Warehouse", AddWS);
app.use("/Warehouse1", FinderWS);
app.use("/AddUser", AddUser);
app.use("/UserList", UserList);
app.use("/NewRules", AddRules);
app.use("/ListRules", ListRules);
app.use("/NewCheckout", AddCheckOuts);
app.use("/ListCheckout", GetCheckout);
app.use("/CustomerListUpdate", CustomerListUpdate);
app.use("/ListofArticalsUpdate", ArticalUpdate);
app.use("/ListOfEntryVouchersUpdate", NewEntryV);
app.use("/ListOfExitVouchersUpdate", ExitVUpdate);
app.use("/ListofWarehouseUpdate", WarehouseUpdate);
app.use("/InvoiceListUpdate", InvoiceUpdate);
app.use("/ListCheckoutUpdate", CheckoutUpdate);
app.use("/UserListUpdate", UserUpdate);
app.use("/ListRulesUpdate", UpdateRules);
app.use("/CustomerListRemove", CustomerRemove);
app.use("/ListofArticalsRemove", ArticalRemove);
app.use("/ListOfEntryVouchersRemove", EntryVRemove);
app.use("/ListOfExitVouchersRemove", ExitVRemove);
app.use("/ListofWarehouseRemove", WarehouseRemove);
app.use("/InvoiceListRemove", InvoiceRemove);
app.use("/ListRulesRemove", RulesRemove);
app.use("/ListCheckoutRemove", CheckOutRemove);
app.use("/UserListRemove", UserRemove);
//Listner
app.listen(3000, () => {
  console.log("Listning To The Port 3000....");
});
