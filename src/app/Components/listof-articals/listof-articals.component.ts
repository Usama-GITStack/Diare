import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listof-articals',
  templateUrl: './listof-articals.component.html',
  styleUrls: ['./listof-articals.component.css']
})
export class ListofArticalsComponent implements OnInit {
  constructor(private CR: CoustomerRegisterService, public config: NgbModalConfig, public modalService: NgbModal) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  ItemCode: String;
  Unit: String;
  Nameofthearticle: String;
  CostPrice: String;
  SellingPrice: String;
  Category: String;
  Margin: String;
  Sub: any;
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
    this.CR.getData1().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
  }
  openXl(content, index) {
    this.modalService.open(content, { size: 'xl' });
    this.ItemCode = this.tabledata[index].ItemCode;
    this.Unit = this.tabledata[index].Unit;
    this.Nameofthearticle = this.tabledata[index].Nameofthearticle;
    this.CostPrice = this.tabledata[index].CostPrice;
    this.SellingPrice = this.tabledata[index].SellingPrice;
    this.Category = this.tabledata[index].Category;
    this.Margin = this.tabledata[index].Margin;
  }
  somethingChanged(event) {
    this.Sub = event;
  }
  somethingChanged1(event) {
    this.Sub = this.Sub - Number(this.SellingPrice)
  }
  onCourseSend() {
    const Co = {
      ItemCode: this.ItemCode,
      Unit: this.Unit,
      Nameofthearticle: this.Nameofthearticle,
      CostPrice: this.CostPrice,
      SellingPrice: this.SellingPrice,
      Category: this.Category,
      Margin: this.Sub
    }
    console.log(Co);
    this.CR.UpdateArticals(Co);
  }
  Delete(index) {
    const Co = {
      ItemCode: this.tabledata[index].ItemCode
    }
    this.CR.ArticalsRemove(Co);
  }
}
