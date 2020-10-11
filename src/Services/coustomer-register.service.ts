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
  changetMessage(message: number) {
    this.messagesend.next(message);
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
  AddArticals(AR) {
    this.http.post('https://diarebackend.herokuapp.com/AddArticals', AR, {
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
  EV(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddEntryVouchers', CR, {
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
  EV1(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddExitVouchers', CR, {
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
  Invoice(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewInvoice', CR, {
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
  AddWarehouse(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddNewWarehouse', CR, {
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
  AddNewVouchers(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewEntryVouchers', CR, {
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
  AddExitVouchers(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Newgoodexit', CR, {
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
  AddWarehouseStuff(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Warehouse', CR, {
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
  UserAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddUser', CR, {
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
  RuleAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewRules', CR, {
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
  CheckoutAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewCheckout', CR, {
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
  ExpenseAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Expenses', CR, {
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
        this._snackBar.open(this.datageting.fail, "OK", {
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
        this._snackBar.open(this.datageting.fail, "OK", {
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
        this._snackBar.open(this.datageting.fail, "OK", {
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
        this._snackBar.open(this.datageting.msg, "OK", {
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
        this._snackBar.open(this.datageting.msg, "OK", {
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
        this._snackBar.open(this.datageting.msg, "OK", {
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
        this._snackBar.open(this.datageting.msg, "OK", {
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
        this._snackBar.open(this.datageting.msg, "OK", {
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
        this._snackBar.open(this.datageting.msg, "OK", {
          duration: 2000,
          panelClass: ['blue-snackbarError']
        });
      }
    })
  }
}

