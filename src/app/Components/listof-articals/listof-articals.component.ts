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
  tabledata1 = [];
  dataTable: any;
  message: any;
  searchText: any;
  searchText1: any;
  searchText2: any;
  fileName = 'ArticalList.xlsx';
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

  }
  public SavePDF() {
    let element = document.getElementById("excel-table")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('ArticalList.pdf');
    });
  }
  ngOnInit() {
    this.CR.getData1().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.tabledata1 = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
    this.ItemCode = this.tabledata[this.message].ItemCode;
    this.Unit = this.tabledata[this.message].Unit;
    this.Nameofthearticle = this.tabledata[this.message].Nameofthearticle;
    this.CostPrice = this.tabledata[this.message].CostPrice;
    this.SellingPrice = this.tabledata[this.message].SellingPrice;
    this.Category = this.tabledata[this.message].Category;
    this.Margin = this.tabledata[this.message].Margin;
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
  Delete() {
    const Co = {
      ItemCode: this.tabledata[this.message].ItemCode
    }
    this.CR.ArticalsRemove(Co);
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
      this.CR.getData1().subscribe(data => {
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
      if (a == this.tabledata[i].ItemCode && b == this.tabledata[i].Nameofthearticle && c == this.tabledata[i].Category) {
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
        ItemCode: this.tabledata[index].ItemCode,
        Unit: this.tabledata[index].Unit,
        Nameofthearticle: this.tabledata[index].Nameofthearticle,
        CostPrice: this.tabledata[index].CostPrice,
        SellingPrice: this.tabledata[index].SellingPrice,
        Category: this.tabledata[index].Category,
        Margin: this.tabledata[index].Margin
      }
    ]
  }
}
