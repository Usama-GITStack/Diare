import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-entry-vouchers',
  templateUrl: './new-entry-vouchers.component.html',
  styleUrls: ['./new-entry-vouchers.component.css']
})
export class NewEntryVouchersComponent implements OnInit {
  @ViewChild('dataTable', { static: true }) table;
  constructor() { }
  dataTable: any;
  tabledata = [
  ];
  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }


}
