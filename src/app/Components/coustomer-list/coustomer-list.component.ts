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

  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  message: any;
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  searchText: any;
  searchText1: any;
  CustomerCode: String;
  LastName: String;
  Phone: String;
  City: String;
  Civility: String;
  FirstName: String;
  Category: String;
  Address: String;
  random: any;
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
      doc.save('Quiz.pdf');
    });
  }
  ngOnInit() {
    this.CR.getData().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
    this.random = Math.floor((Math.random() * 10000) + 1);
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
    }, 1500);
  }
  Transfer(index) {
    this.CR.changetMessage(index);
    this.router.navigateByUrl('/CustomerInfo');
  }
  openSm3(content3) {
    this.modalService.open(content3, { size: 'sm' });
  }
}

