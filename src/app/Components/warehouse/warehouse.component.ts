import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

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
  WAREHOUSECODE: any;
  WAREHOUSENAME: any;
  ADDRESS: any;
  MANAGER: any;
  PHONE: any;
  ITEMNAME: String;
  QUANTITYINSTOCK: String;
  UNITS: String;
  random: any;
  ngOnInit() {
    this.CR.currentMessage.subscribe(message => {
      this.message = message
      console.log(this.message)
      this.random = Math.floor((Math.random() * 10000) + 1);
    });
    this.CR.getData4().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.WAREHOUSECODE = this.tabledata[this.message].WAREHOUSECODE;
      this.WAREHOUSENAME = this.tabledata[this.message].NAMEOFWAREHOUSE;
      this.ADDRESS = this.tabledata[this.message].ADDRESS;
      this.MANAGER = this.tabledata[this.message].NAMEOFMANAGER;
      this.PHONE = this.tabledata[this.message].PHONE;
    })
    setTimeout(() => {
      this.CR.getData8(this.tabledata[this.message].WAREHOUSECODE).subscribe(data => {
        this.datageting = data;
        this.tabledata1 = this.datageting.msg;
        setTimeout(() => {
          this.dataTable = $(this.table.nativeElement);
          this.dataTable.DataTable();
        }, 500);
      })
    }, 1500);
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  onCourseSend() {
    const Co = {
      WAREHOUSECODE: this.tabledata[this.message].WAREHOUSECODE,
      ITEMNAME: this.ITEMNAME,
      QUANTITYINSTOCK: this.QUANTITYINSTOCK,
      UNITS: this.UNITS,
    }
    console.log(Co);
    this.CR.AddWarehouseStuff(Co);
  }
}
