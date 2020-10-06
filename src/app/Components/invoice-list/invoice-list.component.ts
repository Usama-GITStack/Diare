import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router, Routes } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  Warehouse: String;
  FirstName: String;
  LastName: String;
  Email: String;
  Phone: String;
  Address: String;
  FACTNUMBER: String;
  Date: String;
  message: any;
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
  ngOnInit() {
    this.CR.getData5().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
  }
  Target(index) {
    this.CR.changetMessage(index);
    this.router.navigateByUrl('/commercialinvoice');
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
    this.Date = this.tabledata[this.message].Date;
    this.FACTNUMBER = this.tabledata[this.message].FACTNUMBER;
    this.Warehouse = this.tabledata[this.message].Warehouse;
    this.FirstName = this.tabledata[this.message].FirstName;
    this.LastName = this.tabledata[this.message].LastName;
    this.Email = this.tabledata[this.message].Email;
    this.Phone = this.tabledata[this.message].Phone;
    this.Address = this.tabledata[this.message].Address
  }
  onCourseSend() {
    const Co = {
      FACTNUMBER: this.FACTNUMBER,
      Warehouse: this.Warehouse,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Phone: this.Phone,
      Address: this.Address,
    }
    console.log(Co);
    this.CR.UpdateInvoice(Co);
  }
  Delete() {
    const Co = {
      FACTNUMBER: this.tabledata[this.message].FACTNUMBER
    }
    this.CR.InvoiceRemove(Co);
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
      this.CR.getData5().subscribe(data => {
        this.datageting = data;
        this.tabledata = this.datageting.msg;
        setTimeout(() => {
          this.dataTable = $(this.table.nativeElement);
          this.dataTable.DataTable();
        }, 500);

      })
    }, 1500);
  }
}
