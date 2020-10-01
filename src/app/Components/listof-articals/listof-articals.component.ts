import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listof-articals',
  templateUrl: './listof-articals.component.html',
  styleUrls: ['./listof-articals.component.css']
})
export class ListofArticalsComponent implements OnInit {
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
