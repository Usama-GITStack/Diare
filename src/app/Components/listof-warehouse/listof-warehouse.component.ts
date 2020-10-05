import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router, Routes } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listof-warehouse',
  templateUrl: './listof-warehouse.component.html',
  styleUrls: ['./listof-warehouse.component.css']
})
export class ListofWarehouseComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  message: any;
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  WAREHOUSECODE: String;
  NAMEOFWAREHOUSE: String;
  ADDRESS: String;
  NAMEOFMANAGER: String;
  PHONE: String;
  exportexcel() {
    console.log("Usama")
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
    this.SavePDF();
  }
  public SavePDF() {
    let element = document.getElementById("PDF")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('Quiz.pdf');
    });
  }
  ngOnInit() {
    this.CR.getData4().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
  }
  openXl(content, index) {
    this.modalService.open(content, { size: 'xl' });
    this.WAREHOUSECODE = this.tabledata[this.message].WAREHOUSECODE;
    this.NAMEOFWAREHOUSE = this.tabledata[this.message].NAMEOFWAREHOUSE;
    this.ADDRESS = this.tabledata[this.message].ADDRESS;
    this.NAMEOFMANAGER = this.tabledata[this.message].NAMEOFMANAGER;
    this.PHONE = this.tabledata[this.message].PHONE;
  }
  Transfer(index) {
    this.CR.changetMessage(index);
    this.router.navigateByUrl('/Warehouse');
  }
  onCourseSend() {
    const Co = {
      WAREHOUSECODE: this.WAREHOUSECODE,
      NAMEOFWAREHOUSE: this.NAMEOFWAREHOUSE,
      ADDRESS: this.ADDRESS,
      NAMEOFMANAGER: this.NAMEOFMANAGER,
      PHONE: this.PHONE
    }
    console.log(Co);
    this.CR.UpdateWarehouse(Co);
  }
  Delete(index) {
    const Co = {
      WAREHOUSECODE: this.tabledata[this.message].WAREHOUSECODE
    }
    this.CR.WarehouseRemove(Co);
  }
  openSm(content1, i) {
    this.modalService.open(content1, { size: 'sm' });
    this.message = i
    console.log(this.message)
  }
  openSm2(content2, i) {
    this.modalService.open(content2, { size: 'sm' });
    this.message = i
    console.log(this.message)
  }
}
