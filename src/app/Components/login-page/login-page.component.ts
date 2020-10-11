import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  Username: String;
  Password: String;
  constructor(private CR: CoustomerRegisterService) { }

  ngOnInit() {
  }
  onLogin() {
    console.log("aaa");
    const user = {
      Username: this.Username,
      Password: this.Password
    }
    this.CR.authenticateUser(user);
  }
}
