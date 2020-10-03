import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-newgoodexit',
  templateUrl: './newgoodexit.component.html',
  styleUrls: ['./newgoodexit.component.css']
})
export class NewgoodexitComponent implements OnInit {
  @ViewChild('dataTable', { static: true }) table;
  constructor(public config: NgbModalConfig, public modalService: NgbModal, private CR: CoustomerRegisterService) { }
  message: any;
  datageting: any = {};
  dataTable: any;
  tabledata = [
  ];
  tabledata1 = [];
  getdata: any;
  getdata1: any;
  Date: any;
  Document: any;
  Warehouse: any;
  Reception: any;
  ARTICLENAME: String;
  AMOUNT: String;
  UNITS: String;
  ITEMVALUE: String;
  TOTALVALUE: String;
  random: any;
  ngOnInit() {
    this.CR.currentMessage.subscribe(message => {
      this.message = message
      console.log(this.message)
      this.random = Math.floor((Math.random() * 10000) + 1);
    });
    this.CR.getData3().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.Date = this.tabledata[this.message].Date;
      this.Document = this.tabledata[this.message].Document;
      this.Warehouse = this.tabledata[this.message].Warehouse;
      this.Reception = this.tabledata[this.message].Reception;
    })
    setTimeout(() => {
      this.CR.getData7(this.tabledata[this.message].Document).subscribe(data => {
        this.datageting = data;
        this.tabledata1 = this.datageting.msg;
        setTimeout(() => {
          this.dataTable = $(this.table.nativeElement);
          this.dataTable.DataTable();
        }, 500);
      })
    }, 1000);
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  onCourseSend() {
    const Co = {
      Document: this.tabledata[this.message].Document,
      ITEMCODE: "AR-" + this.random,
      ARTICLENAME: this.ARTICLENAME,
      AMOUNT: this.AMOUNT,
      UNITS: this.UNITS,
      ITEMVALUE: this.ITEMVALUE,
      TOTALVALUE: this.TOTALVALUE
    }
    console.log(Co);
    this.CR.AddExitVouchers(Co);
  }
}
