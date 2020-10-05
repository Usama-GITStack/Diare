import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router, Routes } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  Date: String;
  Amount: String;
  EXPENDITURE: String;
  CM: String;
  Wording: String;
  RN: String;
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
  constructor(private CR: CoustomerRegisterService, public config: NgbModalConfig, public modalService: NgbModal) { }
  openXl(content, index) {
    this.modalService.open(content, { size: 'xl' });
    this.RN = this.tabledata[index].RN;
    this.Date = this.tabledata[index].Date;
    this.Amount = this.tabledata[index].Amount;
    this.EXPENDITURE = this.tabledata[index].EXPENDITURE;
    this.CM = this.tabledata[index].CM;
    this.Wording = this.tabledata[index].Wording;
  }
  ngOnInit() {
    this.CR.getData11().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
  }
  onCourseSend() {
    const Co = {
      RN: this.RN,
      Date: this.Date,
      Amount: this.Amount,
      EXPENDITURE: this.EXPENDITURE,
      CM: this.CM,
      Wording: this.Wording,
    }
    console.log(Co);
    this.CR.CheckoutRules(Co);
  }
  Delete(index) {
    const Co = {
      RN: this.tabledata[index].RN,
    }
    this.CR.CheckOutRemove(Co);
  }
}
