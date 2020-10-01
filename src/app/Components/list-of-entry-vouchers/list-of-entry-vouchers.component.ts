import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-of-entry-vouchers',
  templateUrl: './list-of-entry-vouchers.component.html',
  styleUrls: ['./list-of-entry-vouchers.component.css']
})
export class ListOfEntryVouchersComponent implements OnInit {
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
