import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  Email: String;
  random: any
  constructor(private CR: CoustomerRegisterService, private router: Router) { }

  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      UserCOde: "UT-" + this.random,
      Name: this.Name,
      Email: this.Email,
      Phone: this.Phone,
      Function: this.Function,
      Password: this.Password,
      PasswordC: this.PasswordC
    }
    console.log(Co);
    this.CR.UserAdd(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 2000);

  }

}
