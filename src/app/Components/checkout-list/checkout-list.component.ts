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
  tabledata1 = [];
  searchText: any;
  searchText1: any;
  searchText2: any;
  message: any;
  dataTable: any;
  fileName = 'CheckoutList.xlsx';
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
  }
  public SavePDF() {
    let element = document.getElementById("PDF")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('CheckoutList.pdf');
    });
  }
  constructor(private CR: CoustomerRegisterService, public config: NgbModalConfig, public modalService: NgbModal) { }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
    this.RN = this.tabledata[this.message].RN;
    this.Date = this.tabledata[this.message].Date;
    this.Amount = this.tabledata[this.message].Amount;
    this.EXPENDITURE = this.tabledata[this.message].EXPENDITURE;
    this.CM = this.tabledata[this.message].CM;
    this.Wording = this.tabledata[this.message].Wording;
  }
  ngOnInit() {
    this.CR.getData11().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.tabledata1 = this.datageting.msg;
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
  Delete() {
    const Co = {
      RN: this.tabledata[this.message].RN,
    }
    this.CR.CheckOutRemove(Co);
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
  openSm3(content3) {
    this.modalService.open(content3, { size: 'sm' });
  }
  UpdatedAuto() {
    setTimeout(() => {
      this.CR.getData11().subscribe(data => {
        this.datageting = data;
        this.tabledata = this.datageting.msg;
        setTimeout(() => {
          this.dataTable = $(this.table.nativeElement);
          this.dataTable.DataTable();
        }, 500);

      })
    }, 1500);
  }
  DateFilter() {
    var a = this.searchText;
    var b = this.searchText1;
    var c = this.searchText2;
    this.tabledata = this.tabledata1;
    for (var i = 0; i < this.tabledata.length; i++) {
      if (a == this.tabledata[i].RN && b == this.tabledata[i].Amount && c == this.tabledata[i].EXPENDITURE) {
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
        RN: this.tabledata[index].RN,
        Date: this.tabledata[index].Date,
        Amount: this.tabledata[index].Amount,
        EXPENDITURE: this.tabledata[index].EXPENDITURE,
        CM: this.tabledata[index].CM,
        Wording: this.tabledata[index].Wording,
      }
    ]
  }
}
