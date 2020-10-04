import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
@Component({
  selector: 'app-new-checkout',
  templateUrl: './new-checkout.component.html',
  styleUrls: ['./new-checkout.component.css']
})
export class NewCheckoutComponent implements OnInit {
  random: any;
  constructor(private CR: CoustomerRegisterService) { }
  Date: String;
  Amount: String;
  EXPENDITURE: String;
  CM: String;
  Wording: String;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      RN: "SC-" + this.random,
      Date: this.Date,
      Amount: this.Amount,
      EXPENDITURE: this.EXPENDITURE,
      CM: this.CM,
      Wording: this.Wording,
    }
    console.log(Co);
    this.CR.CheckoutAdd(Co);
  }
}
