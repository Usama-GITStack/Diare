import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router, Routes } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list-regulation',
  templateUrl: './list-regulation.component.html',
  styleUrls: ['./list-regulation.component.css']
})
export class ListRegulationComponent implements OnInit {
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  RC: String;
  Date: String;
  CC: String;
  CN: String;
  PM: String;
  Bank: String;
  Checkout: String;
  Amount: String;
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
    this.RC = this.tabledata[index].RC;
    this.Date = this.tabledata[index].Date;
    this.CC = this.tabledata[index].CC;
    this.PM = this.tabledata[index].PM;
    this.Bank = this.tabledata[index].Bank;
    this.Checkout = this.tabledata[index].Checkout;
    this.Amount = this.tabledata[index].Amount;
  }
  ngOnInit() {
    this.CR.getData10().subscribe(data => {
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
      RC: this.RC,
      Date: this.Date,
      CC: this.CC,
      CN: this.CN,
      PM: this.PM,
      Bank: this.Bank,
      Checkout: this.Checkout,
      Amount: this.Amount
    }
    console.log(Co);
    this.CR.UpdateRules(Co);
  }
  Delete(index) {
    const Co = {
      RC: this.tabledata[index].RC,
    }
    this.CR.RulesRemove(Co);
  }
}
