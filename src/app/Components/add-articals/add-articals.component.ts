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
  Nameofthearticle: String;
  CostPrice: String;
  SellingPrice: String;
  Category: String;
  Margin: String;
  Sub: any;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);

  }
  somethingChanged(event) {
    this.Sub = event;
  }
  somethingChanged1(event) {
    this.Sub = this.Sub - Number(this.SellingPrice)
  }
  onCourseSend() {
    const Co = {
      ItemCode: "AR-" + this.random,
      Unit: this.Unit,
      Nameofthearticle: this.Nameofthearticle,
      CostPrice: this.CostPrice,
      SellingPrice: this.SellingPrice,
      Category: this.Category,
      Margin: this.Sub
    }
    console.log(Co);
    this.router.navigateByUrl('/ListofArticals');
    this.CR.AddArticals(Co);
  }
}
