import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-exit-vouchers',
  templateUrl: './add-exit-vouchers.component.html',
  styleUrls: ['./add-exit-vouchers.component.css']
})
export class AddExitVouchersComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  Date: String;
  Document: String;
  Warehouse: String;
  Reception: String;
  ngOnInit() {
  }
  onCourseSend() {
    const Co = {
      Date: this.Date,
      Document: this.Document,
      Warehouse: this.Warehouse,
      Reception: this.Reception
    }
    console.log(Co);
    this.CR.EV1(Co);
    this.router.navigateByUrl('/ListOfExitVouchers');
  }
}
