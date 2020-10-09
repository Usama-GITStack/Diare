import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  random: any;
  datageting: any;
  Warehouse: String;
  FirstName: String;
  LastName: String;
  Email: String;
  Phone: String;
  Address: String;
  table12 = [
    { DESCRIPTION: "ABC COOKIE PACKAGE", AMOUNT: "200", UNIT: "PARCEL", SELLINGPRICE: "105,000 GNF", TOTAL: "21000000 GNF" },
    { DESCRIPTION: "GOOD MORNING BISCUIT 16 PCS", AMOUNT: "100", UNIT: "BOXES", SELLINGPRICE: "105,000 GNF", TOTAL: "10500000 GNF" },
    { DESCRIPTION: "GOOD MORNING BISCUIT 30 PCS", AMOUNT: "100", UNIT: "BOXES", SELLINGPRICE: "110,000 GNF", TOTAL: "11100000 GNF" },
    { DESCRIPTION: "NON DAIRY CREAMER", AMOUNT: "100", UNIT: "BOXES", SELLINGPRICE: "165,000 GNF", TOTAL: "16500000 GNF" },
  ]
  @ViewChild('dataTable', { static: true }) table;
  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  dataTable: any;
  tabledata = [];
  TotalAdd = 0;
  today: number = Date.now();
  ngOnInit() {
    for (var i = 0; i < this.table12.length; i++) {
      this.TotalAdd = this.TotalAdd + parseInt(this.table12[i].TOTAL);
      console.log(this.TotalAdd);
    }
    this.CR.getData4().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      FACTNUMBER: "INVOICE NO." + this.random,
      Date: this.today,
      Warehouse: this.Warehouse,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Phone: this.Phone,
      Address: this.Address,
      InvoiceData: this.table12,
      TotalInvoice: this.TotalAdd,
    }
    console.log(Co);
    this.CR.Invoice(Co);
    this.router.navigateByUrl('/InvoiceList');
  }
}
