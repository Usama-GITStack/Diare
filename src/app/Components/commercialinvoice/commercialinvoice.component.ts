import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
@Component({
  selector: 'app-commercialinvoice',
  templateUrl: './commercialinvoice.component.html',
  styleUrls: ['./commercialinvoice.component.css']
})
export class COMMERCIALINVOICEComponent implements OnInit {
  random: any;
  datageting: any = {};
  tabledata = [];
  message: any;
  Warehouse: String;
  FirstName: String;
  LastName: String;
  Email: String;
  Phone: String;
  Address: String;
  Total: String;
  InvoiceNumber: String;
  GetData: any = {};
  DataQuiz: any;
  today = Date.now();
  constructor(private CR: CoustomerRegisterService) { }

  ngOnInit() {
    this.CR.currentMessage.subscribe(message => {
      this.message = message
      console.log(this.message)
    });
    this.CR.getData5().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.FirstName = this.tabledata[this.message].FirstName + " " + this.tabledata[this.message].LastName;
      this.InvoiceNumber = this.tabledata[this.message].FACTNUMBER;
      this.Email = this.tabledata[this.message].Email;
      this.Phone = this.tabledata[this.message].Phone;
      this.Address = this.tabledata[this.message].Address;
      this.Total = this.tabledata[this.message].TotalInvoice;
      for (var i = 0; i < this.tabledata[this.message].InvoiceData.length; i++) {
        this.GetData[i] = this.tabledata[this.message].InvoiceData[i];
      }
      let arr = [];
      arr = Object.keys(this.GetData).map(i => this.GetData[i])
      console.log(arr);
      this.DataQuiz = arr;
      console.log(this.DataQuiz);
    });
    this.random = Math.floor((Math.random() * 10000) + 1);
  }

}
