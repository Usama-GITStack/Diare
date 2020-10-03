import { Component, OnInit, ViewChild } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-listof-warehouse',
  templateUrl: './listof-warehouse.component.html',
  styleUrls: ['./listof-warehouse.component.css']
})
export class ListofWarehouseComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  fileName = 'ExcelSheet.xlsx';
  exportexcel() {
    console.log("Usama")
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
  ngOnInit() {
    this.CR.getData4().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
  }
}
