import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-access-control',
  templateUrl: './user-access-control.component.html',
  styleUrls: ['./user-access-control.component.css']
})
export class UserAccessControlComponent implements OnInit {
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  UserCode: String;
  UserName: String;
  constructor(private CR: CoustomerRegisterService) { }

  ngOnInit() {
    this.CR.getData9().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
  }
  onCourseSend() {

  }
}
