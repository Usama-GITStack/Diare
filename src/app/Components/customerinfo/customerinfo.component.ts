import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {
  @ViewChild('dataTable', { static: true }) table;
  constructor(private CR: CoustomerRegisterService, private router: Router) { }
  dataTable: any;
  message: any;
  datageting: any = {};
  variable: string;
  variable1: string;
  variable2: string;
  tabledata = [
  ];
  tabledata1 = [];
  Code: String;
  F: String;
  L: String;
  P: String;
  C: String;
  Data = [
    { DATED: "08/12/20", DOCUMENT: "INVOICE No. 00034", Total: "23,450,000 GNF", Totalp: "10,450,000 GNF", GNF: "23,450,000 GNF" },
    { DATED: "08/12/20", DOCUMENT: "INVOICE No. 00038", Total: "23,950,070 GNF", Totalp: " 450,000 GNF", GNF: "21,450,000 GNF" },
    { DATED: "09/12/20", DOCUMENT: "INVOICE No. 00031", Total: "12,450,000 GNF", Totalp: "20,450,000 GNF", GNF: "13,450,000 GNF" }
  ]
  Data1 = [
    { DATED: "09/12/20", DOCUMENT: "INVOICE No. 00134", Total: "23,450,000 GNF", Totalp: "10,450,000 GNF", GNF: "23,450,000 GNF" },
    { DATED: "08/12/20", DOCUMENT: "INVOICE No. 00238", Total: "23,950,070 GNF", Totalp: " 450,000GNF", GNF: "21,450,000 GNF" },
    { DATED: "09/12/20", DOCUMENT: "INVOICE No. 00331", Total: "12,490,000 GNF", Totalp: "20,450,000 GNF", GNF: "13,450,000 GNF" }
  ]
  Data2 = [
    { DATED: "08/12/20", DOCUMENT: "INVOICE No. 004334", Total: "23,450,000 GNF", Totalp: "10,450,000 GNF", GNF: "23,450,000 GNF" },
    { DATED: "09/12/20", DOCUMENT: "INVOICE No. 00058", Total: "23,650,070 GNF", Totalp: " 450,000 GNF", GNF: "213,450,000 GNF" },
    { DATED: "09/12/20", DOCUMENT: "INVOICE No. 06031", Total: "12,450,100 GNF", Totalp: "20,450,000 GNF", GNF: "133,450,000 GNF" }
  ]
  Data3 = [
    { DATED: "08/12/20", DOCUMENT: "INVOICE No. 01034", Total: "13,450,000 GNF", Totalp: "40,450,000 GNF", GNF: "53,450,000 GNF" },
    { DATED: "10/12/20", DOCUMENT: "INVOICE No. 01038", Total: "23,950,070 GNF", Totalp: " 450,000 GNF", GNF: "450,000 GNF" },
    { DATED: "09/12/20", DOCUMENT: "INVOICE No. 00031", Total: "42,450,000 GNF", Totalp: "40,450,000 GNF", GNF: "136,450,000 GNF" }
  ]

  ngOnInit() {
    this.CR.currentMessage0.subscribe(message => {
      this.message = message
      console.log(this.message)
    });
    this.CR.getData().subscribe(data => {
      this.datageting = data;
      switch (this.message) {
        case 0: {
          this.tabledata1 = this.Data;
          this.variable = "59850070"
          this.variable1 = "31350000"
          this.variable2 = "58350000"
          break;
        }
        case 1: {
          this.tabledata1 = this.Data1;
          this.variable = "59850070"
          this.variable1 = "31350000"
          this.variable2 = "58350000"
          break;
        }
        case 2: {
          this.tabledata1 = this.Data2;
          this.variable = "59350070"
          this.variable1 = "31350000"
          this.variable2 = "250350000"
          break;
        }
        case 3: {
          this.tabledata1 = this.Data3;
          this.variable = "59850070"
          this.variable1 = "44945000"
          this.variable2 = "250350000"
          break;
        }
        default: {
          this.tabledata1 = this.Data3;
          this.variable = "59850070"
          this.variable1 = "44945000"
          this.variable2 = "250350000"
          break;
        }

      }
      this.tabledata = this.datageting.msg;
      this.Code = this.tabledata[this.message].CustomerCode;
      this.F = this.tabledata[this.message].FirstName;
      this.L = this.tabledata[this.message].LastName;
      this.P = this.tabledata[this.message].Phone;
      this.C = this.tabledata[this.message].Category;
    });

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();

  }
  Transfer(index) {
    this.CR.changetMessage2(this.tabledata[this.message].FirstName + " " + this.tabledata[this.message].LastName);
    this.CR.changetMessage3(this.tabledata[this.message].CustomerCode);
    this.CR.changetMessage1(this.tabledata1[index].GNF);
    this.router.navigateByUrl('/RECEIPT');
  }
  fileName = 'ExcelSheet.xlsx';
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
    let element = document.getElementById("excel-table")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('Quiz.pdf');
    });
  }
  Submit() {

  }
}
