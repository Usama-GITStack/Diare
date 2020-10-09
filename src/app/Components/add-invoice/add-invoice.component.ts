import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  DATED: String;
  CLIENTNAME: String;
  DOCUMENTNUMBER: String;
  TOTALAMOUNT: String;
  GOODDELIVERYGENERATE: String;

  onCourseSend() {
    const Co = {
      DATED: this.DATED,
      CLIENTNAME: this.CLIENTNAME,
      DOCUMENTNUMBER: this.DOCUMENTNUMBER,
      TOTALAMOUNT: this.TOTALAMOUNT,
      GOODDELIVERYGENERATE: this.GOODDELIVERYGENERATE,
    }
    console.log(Co);
    this.CR.Invoice(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/InvoiceList');
    }, 2000);

  }
  ngOnInit() {
  }

}
