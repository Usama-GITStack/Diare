import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  Name: String;
  Phone: String;
  Function: String;
  Password: String;
  PasswordC: String;
  random: any
  constructor(private CR: CoustomerRegisterService) { }

  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      UserCOde: "UT-" + this.random,
      Name: this.Name,
      Phone: this.Phone,
      Function: this.Function,
      Password: this.Password,
      PasswordC: this.PasswordC
    }
    console.log(Co);
    this.CR.UserAdd(Co);
  }

}
