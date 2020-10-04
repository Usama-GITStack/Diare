import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
@Component({
  selector: 'app-new-rules',
  templateUrl: './new-rules.component.html',
  styleUrls: ['./new-rules.component.css']
})
export class NewRulesComponent implements OnInit {
  random: any;
  random1: any;
  random2: any;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  constructor(private CR: CoustomerRegisterService) { }
  RC: String;
  Date: String;
  CC: String;
  CN: String;
  PM: String;
  Bank: String;
  Checkout: String;
  Amount: String;
  ngOnInit() {
    this.CR.getData().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    });
    this.random = Math.floor((Math.random() * 10000) + 1);
    this.random1 = Math.floor((Math.random() * 10000) + 1);
    this.random2 = Math.floor((Math.random() * 100) + 1);
  }
  onCourseSend() {
    const Co = {
      RC: "RC-" + this.random,
      Date: this.Date,
      CC: "CL-" + this.random1,
      CN: this.CN,
      PM: this.PM,
      Bank: this.Bank,
      Checkout: "Case-" + this.random2,
      Amount: this.Amount
    }
    console.log(Co);
    this.CR.RuleAdd(Co);
  }
}
