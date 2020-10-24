import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';

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
  ngOnInit() {
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
  }

}
