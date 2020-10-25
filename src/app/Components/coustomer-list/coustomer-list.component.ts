import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-coustomer-list',
  templateUrl: './coustomer-list.component.html',
  styleUrls: ['./coustomer-list.component.css']
})
export class CoustomerListComponent implements OnInit {
  dtOptions: any;
  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal) { }

  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  DataQuiz: any;
  tabledata1 = [];
  message: any;
  dataTable: any;
  fileName = 'CustomerList.xlsx';
  searchText: any;
  searchText1: any;
  searchText2: any;
  CustomerCode: String;
  LastName: String;
  Phone: String;
  City: String;
  Civility: String;
  FirstName: String;
  Category: String;
  Address: String;
  RC: String;
  CC: String;
  CN: String;
  PM: String;
  Bank: String;
  Checkout: String;
  Amount: String;
  Date = Date.now();
  random: any;
  random1: any;
  exportexcel() {
    console.log("Usama")
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);

  }
  public SavePDF() {
    var data = document.getElementById('excel-table');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('CustomerList.pdf'); // Generated PDF
    });
  }
  ngOnInit() {
    this.CR.getData().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.tabledata1 = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
    this.random = Math.floor((Math.random() * 10000) + 1);
    this.random1 = Math.floor((Math.random() * 10000) + 1);
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
    this.CustomerCode = this.tabledata[this.message].CustomerCode;
    this.LastName = this.tabledata[this.message].LastName;
    this.Phone = this.tabledata[this.message].Phone;
    this.City = this.tabledata[this.message].City;
    this.Civility = this.tabledata[this.message].Civility;
    this.FirstName = this.tabledata[this.message].FirstName;
    this.Category = this.tabledata[this.message].Category;
    this.Address = this.tabledata[this.message].MadinaAddress;
  }
  onCourseSend() {
    const Co = {
      CustomerCode: this.CustomerCode,
      LastName: this.LastName,
      Phone: this.Phone,
      City: this.City,
      Civility: this.Civility,
      FirstName: this.FirstName,
      Category: this.Category,
      Address: this.Address
    }
    console.log(Co);
    this.CR.CustomerListUpdate(Co);
  }
  Delete() {
    const Co = {
      CustomerCode: this.tabledata[this.message].CustomerCode
    }
    this.CR.CustomerListRemove(Co);
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
      this.CR.getData().subscribe(data => {
        this.datageting = data;
        this.tabledata = this.datageting.msg;
        setTimeout(() => {
          this.dataTable = $(this.table.nativeElement);
          this.dataTable.DataTable();
        }, 500);

      })
    }, 2000);
  }
  Transfer(index) {
    this.CR.changetMessage0(index);
    this.router.navigateByUrl('/CustomerInfo');
  }
  openSm3(content3) {
    this.modalService.open(content3, { size: 'sm' });
  }
  opencash(contentcash, index) {
    this.CR.changetMessage4(index);
    this.modalService.open(contentcash, { size: 'xl' });
    this.CustomerCode = this.tabledata[index].CustomerCode;
    this.LastName = this.tabledata[index].LastName;
    this.Phone = this.tabledata[index].Phone;
    this.City = this.tabledata[index].City;
    this.Civility = this.tabledata[index].Civility;
    this.FirstName = this.tabledata[index].FirstName;
    this.Category = this.tabledata[index].Category;
    this.Address = this.tabledata[index].MadinaAddress;
  }
  DateFilter() {
    var a = this.searchText;
    var b = this.searchText1;
    var c = this.searchText2;
    this.tabledata = this.tabledata1;
    for (var i = 0; i < this.tabledata.length; i++) {
      if (b == this.tabledata[i].CustomerCode && c == this.tabledata[i].Category) {
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
        CustomerCode: this.tabledata[index].CustomerCode,
        LastName: this.tabledata[index].LastName,
        Phone: this.tabledata[index].Phone,
        City: this.tabledata[index].City,
        Civility: this.tabledata[index].Civility,
        FirstName: this.tabledata[index].FirstName,
        Category: this.tabledata[index].Category,
        Address: this.tabledata[index].MadinaAddress
      }
    ]
  }
  onCourseSend12() {
    const Co = {
      RC: "RC-" + this.random,
      Date: this.Date,
      CC: this.CustomerCode,
      CN: this.FirstName,
      PM: this.PM,
      Bank: this.Bank,
      Checkout: "Case-" + this.random1,
      Amount: this.Amount
    }
    console.log(Co);
    this.CR.RuleAdd(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/RECEIPT');
    }, 2000);

  }

  openSm11(content11) {
    this.modalService.open(content11, { size: 'lg' });
  }

  openSm12(content12) {
    this.modalService.open(content12, { size: 'lg' });
  }

  openSm13(content13) {
    this.modalService.open(content13, { size: 'lg' });
  }

  openSm14(content14) {
    this.modalService.open(content14, { size: 'lg' });
  }
}

