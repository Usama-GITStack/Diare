import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-of-exit-vouchers',
  templateUrl: './list-of-exit-vouchers.component.html',
  styleUrls: ['./list-of-exit-vouchers.component.css']
})
export class ListOfExitVouchersComponent implements OnInit {

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
