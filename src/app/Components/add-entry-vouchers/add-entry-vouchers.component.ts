import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-entry-vouchers',
  templateUrl: './add-entry-vouchers.component.html',
  styleUrls: ['./add-entry-vouchers.component.css']
})
export class AddEntryVouchersComponent implements OnInit {

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
    this.CR.EV(Co);
  }
}
