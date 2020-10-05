import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router, Routes } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-of-entry-vouchers',
  templateUrl: './list-of-entry-vouchers.component.html',
  styleUrls: ['./list-of-entry-vouchers.component.css']
})
export class ListOfEntryVouchersComponent implements OnInit {
  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  message: any;
  fileName = 'ExcelSheet.xlsx';
  Date: String;
  Document: String;
  Warehouse: String;
  Reception: String;
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
  openXl(content, index) {
    this.modalService.open(content, { size: 'xl' });
    this.Date = this.tabledata[this.message].Date;
    this.Document = this.tabledata[this.message].Document;
    this.Warehouse = this.tabledata[this.message].Warehouse;
    this.Reception = this.tabledata[this.message].Reception;
  }
  ngOnInit() {
    this.CR.getData2().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
  }
  Transfer(index) {
    this.CR.changetMessage(index);
    this.router.navigateByUrl('/NewEntryVouchers');
  }
  onCourseSend() {
    const Co = {
      Date: this.Date,
      Document: this.Document,
      Warehouse: this.Warehouse,
      Reception: this.Reception
    }
    console.log(Co);
    this.CR.UpdateEV(Co);
  }
  Delete(index) {
    const Co = {
      Document: this.tabledata[this.message].Document
    }
    this.CR.EVRemove(Co);
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
