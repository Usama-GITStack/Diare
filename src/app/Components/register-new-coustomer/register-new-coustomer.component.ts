import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-new-coustomer',
  templateUrl: './register-new-coustomer.component.html',
  styleUrls: ['./register-new-coustomer.component.css']
})
export class RegisterNewCoustomerComponent implements OnInit {
  random: any;
  constructor(private CR: CoustomerRegisterService) { }
  CustomerCode: String;
  LastName: String;
  Phone: String;
  City: String;
  Civility: String;
  FirstName: String;
  Category: String;
  Address: String;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      CustomerCode: "CL-" + this.random,
      LastName: this.LastName,
      Phone: this.Phone,
      City: this.City,
      Civility: this.Civility,
      FirstName: this.FirstName,
      Category: this.Category,
      Address: this.Address
    }
    console.log(Co);
    this.CR.CoustomerRegister(Co);
  }
}
