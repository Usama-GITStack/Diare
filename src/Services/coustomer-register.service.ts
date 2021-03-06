import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CoustomerRegisterService {
  private messagesend = new BehaviorSubject<number>(0);
  currentMessage = this.messagesend.asObservable();
  private messagesend0 = new BehaviorSubject<number>(0);
  currentMessage0 = this.messagesend0.asObservable();
  private messagesend1 = new BehaviorSubject<string>("default");
  currentMessage1 = this.messagesend1.asObservable();
  private messagesend2 = new BehaviorSubject<string>("default");
  currentMessage2 = this.messagesend2.asObservable();
  private messagesend3 = new BehaviorSubject<string>("default");
  currentMessage3 = this.messagesend3.asObservable();
  private messagesend4 = new BehaviorSubject<number>(0);
  currentMessage4 = this.messagesend4.asObservable();
  changetMessage(message: number) {
    this.messagesend.next(message);
  }
  changetMessage1(message: string) {
    this.messagesend1.next(message);
  }
  changetMessage2(message: string) {
    this.messagesend2.next(message);
  }
  changetMessage3(message: string) {
    this.messagesend3.next(message);
  }
  changetMessage0(message: number) {
    this.messagesend0.next(message);
  }
  changetMessage4(message: number) {
    this.messagesend4.next(message);
  }

  datageting: any = {}
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private Rout: Router) { }
  authenticateUser(user) {
    this.http.post('https://diarebackend.herokuapp.com/', user).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this.Rout.navigateByUrl('/dashboard');
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.message, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  CoustomerRegister(CR) {
    this.http.post('https://diarebackend.herokuapp.com/RegisterCustomer', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Customer successfully Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  AddArticals(AR) {
    this.http.post('https://diarebackend.herokuapp.com/AddArticals', AR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Artical successfully Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  EV(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddEntryVouchers', CR, {
    }).subscribe(data => {
      if (this.datageting.success) {
        this._snackBar.open("Entry Voucher successfully Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  EV1(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddExitVouchers', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Exit Voucher successfully Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  Invoice(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewInvoice', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Invoice Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  AddWarehouse(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddNewWarehouse', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("WArehouse Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  AddNewVouchers(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewEntryVouchers', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("New Voucher Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  AddExitVouchers(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Newgoodexit', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Exit Voucher Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  AddWarehouseStuff(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Warehouse', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Stuff  Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UserAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddUser', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("User  Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  RuleAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewRules', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Rules  Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  CheckoutAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewCheckout', CR, {
    }).subscribe(data => {
      if (this.datageting.success) {
        this._snackBar.open("Checkout Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  ExpenseAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Expenses', CR, {
    }).subscribe(data => {
      if (this.datageting.success) {
        this._snackBar.open("Expense successfully Add", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  getData() {
    return this.http.get('https://diarebackend.herokuapp.com/CustomerList');
  }
  getData1() {
    return this.http.get('https://diarebackend.herokuapp.com/ListofArticals');
  }
  getData2() {
    return this.http.get('https://diarebackend.herokuapp.com/ListOfEntryVouchers');
  }
  getData3() {
    return this.http.get('https://diarebackend.herokuapp.com/ListOfExitVouchers');
  }
  getData4() {
    return this.http.get('https://diarebackend.herokuapp.com/ListofWarehouse');
  }
  getData5() {
    return this.http.get('https://diarebackend.herokuapp.com/InvoiceList');
  }
  getData6(Finder) {
    return this.http.get('https://diarebackend.herokuapp.com/NewEntryVouchers1', {
      headers: {
        auth: Finder
      }
    });
  }
  getData7(Finder) {
    return this.http.get('https://diarebackend.herokuapp.com/Newgoodexit1', {
      headers: {
        auth: Finder
      }
    });
  }
  getData8(Finder) {
    return this.http.get('https://diarebackend.herokuapp.com/Warehouse1', {
      headers: {
        auth: Finder
      }
    });
  }
  getData9() {
    return this.http.get('https://diarebackend.herokuapp.com/UserList');
  }
  getData10() {
    return this.http.get('https://diarebackend.herokuapp.com/ListRules');
  }
  getData11() {
    return this.http.get('https://diarebackend.herokuapp.com/ListCheckout');
  }
  getData12() {
    return this.http.get('https://diarebackend.herokuapp.com/ExpensesList');
  }
  //Updation
  CustomerListUpdate(CR) {
    this.http.post('https://diarebackend.herokuapp.com/CustomerListUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UpdateArticals(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofArticalsUpdate', CR, {
    }).subscribe(data => {
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UpdateEV(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfEntryVouchersUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UpdateEV1(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfExitVouchersUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UpdateWarehouse(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofWarehouseUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UpdateInvoice(CR) {
    this.http.post('https://diarebackend.herokuapp.com/InvoiceListUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UpdateRules(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListRulesUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  CheckoutRules(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListCheckoutUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UserUpdate(CR) {
    this.http.post('https://diarebackend.herokuapp.com/UserListUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.success, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open(this.datageting.fail, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  //Remove
  CustomerListRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/CustomerListRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  ArticalsRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofArticalsRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  EVRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfEntryVouchersRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  EV1Remove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfExitVouchersRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  WarehouseRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofWarehouseRemove', CR, {
    }).subscribe(data => {
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  InvoiceRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/InvoiceListRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  RulesRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListRulesRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  CheckOutRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListCheckoutRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  UserListRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/UserListRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
      else {
        this._snackBar.open("Data Is Remove", "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
  private messagesend11 = new BehaviorSubject<String>("default");
  currentMessage11 = this.messagesend11.asObservable();
  changetMessage11(message: String) {
    this.messagesend11.next(message);
  }
  private messagesend12 = new BehaviorSubject<String>("default");
  currentMessage12 = this.messagesend12.asObservable();
  changetMessage12(message: String) {
    this.messagesend12.next(message);
  }
  private messagesend13 = new BehaviorSubject<String>("default");
  currentMessage13 = this.messagesend13.asObservable();
  changetMessage13(message: String) {
    this.messagesend13.next(message);
  }
  private messagesend14 = new BehaviorSubject<String>("default");
  currentMessage14 = this.messagesend14.asObservable();
  changetMessage14(message: String) {
    this.messagesend14.next(message);
  }
  private messagesend15 = new BehaviorSubject<String>("default");
  currentMessage15 = this.messagesend15.asObservable();
  changetMessage15(message: String) {
    this.messagesend15.next(message);
  }
  private messagesend16 = new BehaviorSubject<String>("default");
  currentMessage16 = this.messagesend16.asObservable();
  changetMessage16(message: String) {
    this.messagesend16.next(message);
  }
  private messagesend17 = new BehaviorSubject<String>("default");
  currentMessage17 = this.messagesend17.asObservable();
  changetMessage17(message: String) {
    this.messagesend17.next(message);
  }
}
