import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-coustomer-list',
  templateUrl: './coustomer-list.component.html',
  styleUrls: ['./coustomer-list.component.css']
})
export class CoustomerListComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService) { }
  @ViewChild('dataTable', { static: true }) table;
  datageting: any = {};
  tabledata = [];
  dataTable: any;

  ngOnInit() {
    this.CR.getData().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      setTimeout(() => {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.DataTable();
      }, 500);
    })
  }

}
