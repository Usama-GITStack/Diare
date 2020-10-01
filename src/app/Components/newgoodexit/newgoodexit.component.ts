import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newgoodexit',
  templateUrl: './newgoodexit.component.html',
  styleUrls: ['./newgoodexit.component.css']
})
export class NewgoodexitComponent implements OnInit {
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
