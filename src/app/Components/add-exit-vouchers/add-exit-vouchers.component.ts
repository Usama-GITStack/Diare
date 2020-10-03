import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
@Component({
  selector: 'app-add-exit-vouchers',
  templateUrl: './add-exit-vouchers.component.html',
  styleUrls: ['./add-exit-vouchers.component.css']
})
export class AddExitVouchersComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService) { }
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
  }
}
