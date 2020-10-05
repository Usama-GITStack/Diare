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
    this.http.post('http://localhost:3000/RegisterCustomer', CR, {
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
    this.http.post('http://localhost:3000/AddArticals', AR, {
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
    this.http.post('http://localhost:3000/AddEntryVouchers', CR, {
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
    this.http.post('http://localhost:3000/AddExitVouchers', CR, {
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
    this.http.post('http://localhost:3000/NewInvoice', CR, {
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
    this.http.post('http://localhost:3000/AddNewWarehouse', CR, {
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
    this.http.post('http://localhost:3000/NewEntryVouchers', CR, {
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
    this.http.post('http://localhost:3000/Newgoodexit', CR, {
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
    this.http.post('http://localhost:3000/Warehouse', CR, {
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
    this.http.post('http://localhost:3000/AddUser', CR, {
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
    this.http.post('http://localhost:3000/NewRules', CR, {
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
    this.http.post('http://localhost:3000/NewCheckout', CR, {
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
    return this.http.get('http://localhost:3000/CustomerList');
  }
  getData1() {
    return this.http.get('http://localhost:3000/ListofArticals');
  }
  getData2() {
    return this.http.get('http://localhost:3000/ListOfEntryVouchers');
  }
  getData3() {
    return this.http.get('http://localhost:3000/ListOfExitVouchers');
  }
  getData4() {
    return this.http.get('http://localhost:3000/ListofWarehouse');
  }
  getData5() {
    return this.http.get('http://localhost:3000/InvoiceList');
  }
  getData6(Finder) {
    return this.http.get('http://localhost:3000/NewEntryVouchers1', {
      headers: {
        auth: Finder
      }
    });
  }
  getData7(Finder) {
    return this.http.get('http://localhost:3000/Newgoodexit1', {
      headers: {
        auth: Finder
      }
    });
  }
  getData8(Finder) {
    return this.http.get('http://localhost:3000/Warehouse1', {
      headers: {
        auth: Finder
      }
    });
  }
  getData9() {
    return this.http.get('http://localhost:3000/UserList');
  }
  getData10() {
    return this.http.get('http://localhost:3000/ListRules');
  }
  getData11() {
    return this.http.get('http://localhost:3000/ListCheckout');
  }
  //Updation
  CustomerListUpdate(CR) {
    this.http.post('http://localhost:3000/CustomerListUpdate', CR, {
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
    this.http.post('http://localhost:3000/ListofArticalsUpdate', CR, {
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
    this.http.post('http://localhost:3000/ListOfEntryVouchersUpdate', CR, {
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
    this.http.post('http://localhost:3000/ListOfExitVouchersUpdate', CR, {
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
    this.http.post('http://localhost:3000/ListofWarehouseUpdate', CR, {
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
    this.http.post('http://localhost:3000/InvoiceListUpdate', CR, {
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
    this.http.post('http://localhost:3000/ListRulesUpdate', CR, {
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
    this.http.post('http://localhost:3000/ListCheckoutUpdate', CR, {
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
    this.http.post('http://localhost:3000/UserListUpdate', CR, {
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
    this.http.post('http://localhost:3000/CustomerListRemove', CR, {
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
    this.http.post('http://localhost:3000/ListofArticalsRemove', CR, {
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
    this.http.post('http://localhost:3000/ListOfEntryVouchersRemove', CR, {
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
    this.http.post('http://localhost:3000/ListOfExitVouchersRemove', CR, {
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
    this.http.post('http://localhost:3000/ListofWarehouseRemove', CR, {
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
    this.http.post('http://localhost:3000/InvoiceListRemove', CR, {
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
    this.http.post('http://localhost:3000/ListRulesRemove', CR, {
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
    this.http.post('http://localhost:3000/ListCheckoutRemove', CR, {
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
    this.http.post('http://localhost:3000/UserListRemove', CR, {
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

