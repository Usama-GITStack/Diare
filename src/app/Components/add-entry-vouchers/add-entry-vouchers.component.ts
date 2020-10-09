import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-entry-vouchers',
  templateUrl: './add-entry-vouchers.component.html',
  styleUrls: ['./add-entry-vouchers.component.css']
})
export class AddEntryVouchersComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  Date: String;
  Document: String;
  Warehouse: String;
  Reception: String;
  AA: number;
  ngOnInit() {
    console.log(this.AA);
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
    this.router.navigateByUrl('/ListOfEntryVouchers');
  }
}
