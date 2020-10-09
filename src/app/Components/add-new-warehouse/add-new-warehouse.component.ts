import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-warehouse',
  templateUrl: './add-new-warehouse.component.html',
  styleUrls: ['./add-new-warehouse.component.css']
})
export class AddNewWarehouseComponent implements OnInit {
  random: any;
  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  WAREHOUSECODE: String;
  NAMEOFWAREHOUSE: String;
  ADDRESS: String;
  NAMEOFMANAGER: String;
  PHONE: String;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      WAREHOUSECODE: "AR-" + this.random,
      NAMEOFWAREHOUSE: this.NAMEOFWAREHOUSE,
      ADDRESS: this.ADDRESS,
      NAMEOFMANAGER: this.NAMEOFMANAGER,
      PHONE: this.PHONE
    }
    console.log(Co);
    this.CR.AddWarehouse(Co);
    this.router.navigateByUrl('/AddNewWarehouse');
  }
}
