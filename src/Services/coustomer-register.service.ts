import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoustomerRegisterService {
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
    this.http.post('http://localhost:3000/AddInvoice', CR, {
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
}

