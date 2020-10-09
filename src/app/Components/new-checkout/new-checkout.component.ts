import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-checkout',
  templateUrl: './new-checkout.component.html',
  styleUrls: ['./new-checkout.component.css']
})
export class NewCheckoutComponent implements OnInit {
  random: any;
  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal) { }
  Date: String;
  Amount: String;
  EXPENDITURE: String;
  CM: String;
  Wording: String;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      RN: "SC-" + this.random,
      Date: this.Date,
      Amount: this.Amount,
      EXPENDITURE: this.EXPENDITURE,
      CM: this.CM,
      Wording: this.Wording,
    }
    console.log(Co);
    this.CR.CheckoutAdd(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/ListCheckout');
    }, 2000);

  }

  openSm(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openSm1(content1) {
    this.modalService.open(content1, { size: 'lg' });
  }

  openSm2(content2) {
    this.modalService.open(content2, { size: 'lg' });
  }

  openSm3(content3) {
    this.modalService.open(content3, { size: 'lg' });
  }
  Submit() {

  }
}
