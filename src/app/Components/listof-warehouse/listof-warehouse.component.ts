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
    this.WAREHOUSECODE = this.tabledata[index].WAREHOUSECODE;
    this.NAMEOFWAREHOUSE = this.tabledata[index].NAMEOFWAREHOUSE;
    this.ADDRESS = this.tabledata[index].ADDRESS;
    this.NAMEOFMANAGER = this.tabledata[index].NAMEOFMANAGER;
    this.PHONE = this.tabledata[index].PHONE;
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
      WAREHOUSECODE: this.tabledata[index].WAREHOUSECODE
    }
    this.CR.WarehouseRemove(Co);
  }
}
