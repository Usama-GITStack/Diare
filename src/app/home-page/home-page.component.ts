import { CoustomerRegisterService } from './../../Services/coustomer-register.service';
import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public isMenuCollapsed = true;
  datageting: any = {};
  tabledata = [];
  datageting1: any = {};
  tabledata1 = [];
  datageting2: any = {};
  tabledata2 = [];
  datageting3: any = {};
  tabledata3 = [];
  datageting4: any = {};
  tabledata4 = [];
  message: any;
  SP: number;
  CL: number;
  GetData: any = {};
  DataQuiz: any;
  Sales: number;
  Stock: number;
  constructor(private CR: CoustomerRegisterService) { }
  chart: any = [];
  Ex: number = 0;
  ngOnInit() {
    this.CR.getData().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
      this.CL = this.tabledata.length;
    });
    this.CR.getData5().subscribe(data => {
      this.datageting1 = data;
      this.tabledata1 = this.datageting1.msg;
      this.Sales = this.tabledata1.length;
    });
    this.CR.getData4().subscribe(data => {
      this.datageting2 = data;
      this.tabledata2 = this.datageting2.msg;
      this.Stock = this.tabledata2.length;

    });
    this.CR.getData5().subscribe(data => {
      this.datageting3 = data;
      this.tabledata3 = this.datageting3.msg;
      this.SP = this.tabledata3[0].TotalInvoice;

    });
    this.CR.getData10().subscribe(data => {
      this.datageting4 = data;
      this.tabledata4 = this.datageting4.msg;
      for (var i = 0; i < this.tabledata4.length; i++) {
        console.log(this.tabledata4[i].Amount)
        this.Ex = this.Ex + Number(this.tabledata4[i].Amount);
        console.log(this.Ex)
      }
    });
  }

}
