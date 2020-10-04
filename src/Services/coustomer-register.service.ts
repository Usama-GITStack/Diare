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
}

