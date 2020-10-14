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
  tabledata1 = [];
  tabledata2 = [];
  searchText: any;
  searchText1: any;
  searchText2: any;
  message: any;
  dataTable: any;
  fileName = 'RegulationrList.xlsx';
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
  }
  public SavePDF() {
    let element = document.getElementById("excel-table")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('RegulationrList.pdf');
    });
  }
  constructor(private CR: CoustomerRegisterService, public config: NgbModalConfig, public modalService: NgbModal) { }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
    this.RC = this.tabledata[this.message].RC;
    this.Date = this.tabledata[this.message].Date;
    this.CC = this.tabledata[this.message].CC;
    this.PM = this.tabledata[this.message].PM;
    this.Bank = this.tabledata[this.message].Bank;
    this.Checkout = this.tabledata[this.message].Checkout;
    this.Amount = this.tabledata[this.message].Amount;
  }
  ngOnInit() {
    this.CR.getData10().subscribe(data => {
      this.datageting = data;
      this.tabledata1 = this.datageting.msg;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    });
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
  Delete() {
    const Co = {
      RC: this.tabledata[this.message].RC,
    }
    this.CR.RulesRemove(Co);
    this.UpdatedAuto();
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
  UpdatedAuto() {
    setTimeout(() => {
      this.CR.getData10().subscribe(data => {
        this.datageting = data;
        this.tabledata = this.datageting.msg;
        setTimeout(() => {
          this.dataTable = $(this.table.nativeElement);
          this.dataTable.DataTable();
        }, 500);

      })
    }, 1500);
  }
  openSm3(content3) {
    this.modalService.open(content3, { size: 'sm' });
  }
  DateFilter() {
    var a = this.searchText;
    var b = this.searchText1;
    var c = this.searchText2;
    this.tabledata = this.tabledata1;
    for (var i = 0; i < this.tabledata.length; i++) {
      if (b == this.tabledata[i].CC && c == this.tabledata[i].RC) {
        var index = i;
        console.log(this.tabledata);
        break;
      }
      else {
        console.log("No Found")
      }
    }
    this.tabledata = [
      {
        RC: this.tabledata[index].RC,
        Date: this.tabledata[index].Date,
        CC: this.tabledata[index].CC,
        PM: this.tabledata[index].PM,
        Bank: this.tabledata[index].Bank,
        Checkout: this.tabledata[index].Checkout,
        Amount: this.tabledata[index].Amount,
      }
    ]
  }
}
