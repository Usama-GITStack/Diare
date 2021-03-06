import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';
import { numberToWords } from 'v-number-to-words';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class RECEIPTComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService) { }
  message: any;
  message1: any;
  message2: any;
  message4: any;
  Date = Date.now();
  datageting: any = {};
  tabledata = [];
  CC: String;
  Name: String;
  CH: String;
  CN: String;
  Bank: String;
  Ammount: String;
  Words: any;
  random: any;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
    this.CR.currentMessage1.subscribe(message => {
      this.message = message
      console.log(this.message)
    });
    this.CR.currentMessage2.subscribe(message => {
      this.message1 = message
      console.log(this.message)
    });
    this.CR.currentMessage3.subscribe(message => {
      this.message2 = message
      console.log(this.message)
    });
    this.CR.currentMessage4.subscribe(message => {
      this.message4 = message
      console.log(this.message4)
    });
    this.CR.currentMessage11.subscribe(message => {
      this.CC = message
    });
    this.CR.currentMessage12.subscribe(message => {
      this.Name = message
    });
    this.CR.currentMessage13.subscribe(message => {
      this.CH = message

    });
    this.CR.currentMessage14.subscribe(message => {
      this.Bank = message

    });
    this.CR.currentMessage15.subscribe(message => {
      this.CN = message
    });
    this.CR.currentMessage16.subscribe(message => {
      this.Ammount = message
      this.Words = numberToWords(Number(this.Ammount));
    });
  }

}
