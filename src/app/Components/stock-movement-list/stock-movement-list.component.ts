import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stock-movement-list',
  templateUrl: './stock-movement-list.component.html',
  styleUrls: ['./stock-movement-list.component.css']
})
export class StockMovementListComponent implements OnInit {

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
