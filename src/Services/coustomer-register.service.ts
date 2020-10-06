import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
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
  constructor(private http: HttpClient) { }
  CoustomerRegister(CR) {
    this.http.post('https://diarebackend.herokuapp.com/RegisterCustomer', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  AddArticals(AR) {
    this.http.post('https://diarebackend.herokuapp.com/AddArticals', AR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  EV(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddEntryVouchers', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  EV1(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddExitVouchers', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  Invoice(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewInvoice', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  AddWarehouse(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddNewWarehouse', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  AddNewVouchers(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewEntryVouchers', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  AddExitVouchers(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Newgoodexit', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  AddWarehouseStuff(CR) {
    this.http.post('https://diarebackend.herokuapp.com/Warehouse', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UserAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/AddUser', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  RuleAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewRules', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  CheckoutAdd(CR) {
    this.http.post('https://diarebackend.herokuapp.com/NewCheckout', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
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
  //Updation
  CustomerListUpdate(CR) {
    this.http.post('https://diarebackend.herokuapp.com/CustomerListUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UpdateArticals(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofArticalsUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UpdateEV(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfEntryVouchersUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UpdateEV1(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfExitVouchersUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UpdateWarehouse(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofWarehouseUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UpdateInvoice(CR) {
    this.http.post('https://diarebackend.herokuapp.com/InvoiceListUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UpdateRules(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListRulesUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  CheckoutRules(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListCheckoutUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UserUpdate(CR) {
    this.http.post('https://diarebackend.herokuapp.com/UserListUpdate', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  //Remove
  CustomerListRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/CustomerListRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  ArticalsRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofArticalsRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  EVRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfEntryVouchersRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  EV1Remove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListOfExitVouchersRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  WarehouseRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListofWarehouseRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  InvoiceRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/InvoiceListRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  RulesRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListRulesRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  CheckOutRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/ListCheckoutRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
  UserListRemove(CR) {
    this.http.post('https://diarebackend.herokuapp.com/UserListRemove', CR, {
    }).subscribe(data => {
      this.datageting = data
      if (this.datageting.success) {
        window.alert(this.datageting.success);
      }
      else {
        window.alert(this.datageting.fail);
      }
    })
  }
}

