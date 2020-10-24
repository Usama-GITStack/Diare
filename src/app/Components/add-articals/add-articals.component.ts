import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-articals',
  templateUrl: './add-articals.component.html',
  styleUrls: ['./add-articals.component.css']
})
export class AddArticalsComponent implements OnInit {
  random: any;
  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  ItemCode: String;
  Unit: String;
  datageting: any = {};
  tabledata = [];
  message: any;
  dataTable: any;
  Nameofthearticle: String;
  CostPrice: String;
  SellingPrice: String;
  Category: String;
  Margin: String;
  Sub: any;
  Warehouse: String;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
    this.CR.getData4().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
  }
  somethingChanged(event) {
    this.Sub = event;
  }
  somethingChanged1(event) {
    this.Sub = Number(this.CostPrice) - Number(this.SellingPrice)
  }
  onCourseSend() {
    const Co = {
      ItemCode: "AR-" + this.random,
      Unit: this.Unit,
      Nameofthearticle: this.Nameofthearticle,
      CostPrice: this.CostPrice,
      SellingPrice: this.SellingPrice,
      Category: this.Category,
      Margin: this.Sub,
      Warehouse: this.Warehouse
    }
    console.log(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/ListofArticals');
    }, 2000);

    this.CR.AddArticals(Co);
  }
}
