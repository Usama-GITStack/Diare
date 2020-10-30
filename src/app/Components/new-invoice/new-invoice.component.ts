import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  random: any;
  datageting: any;
  FN: String;
  LN: String;
  PH: String;
  ADD: String;
  datageting1: any;
  Warehouse: String;
  FirstName: String;
  LastName: String;
  Email: String;
  Phone: String;
  Address: String;
  table12: any;
  artical: any;
  // myForm = new FormGroup({
  //   DESCRIPTION: new FormControl(),
  //   AMOUNT: new FormControl(),
  //   UNITS: new FormControl(),
  //   SELLINGPRICE: new FormControl(),
  // });
  // arr: FormArray;
  dynamicForm: FormGroup;
  submitted = false;
  dataTable: any;
  tabledata = [];
  dataTable1: any;
  tabledata1 = [];
  TotalAdd = 0;
  DESCRIPTION: String[];
  AMOUNT: String[];
  UNITS: String[];
  SELLINGPRICE: String[];
  today: number = Date.now();
  myControl = new FormControl();
  singletotal = [];
  @ViewChild('dataTable', { static: true }) table;
  constructor(private CR: CoustomerRegisterService, private router: Router, public config: NgbModalConfig, public modalService: NgbModal, private fb: FormBuilder) { }
  // createItem() {
  //   return this.fb.group({
  //     DESCRIPTION: [''],
  //     AMOUNT: [''],
  //     UNITS: [''],
  //     SELLINGPRICE: [''],
  //   })
  // }
  // addItem() {
  //   this.arr = this.myForm.get('arr') as FormArray;
  //   this.arr.push(this.createItem());
  // }
  // onSubmit() {
  //   console.log(this.myForm.value);
  // }
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }
  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.fb.group({
          DESCRIPTION: [''],
          AMOUNT: [''],
          UNIT: [''],
          SELLINGPRICE: [''],
          TOTAL: ['']
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.dynamicForm.invalid) {
      return;
    }

    this.table12 = this.dynamicForm.value.tickets;
    console.log(this.dynamicForm.value.tickets);
  }
  TOtalCal() {
    setTimeout(() => {
      for (var i = 0; i < this.dynamicForm.value.tickets.length; i++) {
        this.TotalAdd = this.TotalAdd + parseInt(this.dynamicForm.value.tickets[i].TOTAL);
        console.log(this.TotalAdd);

      }
    }, 500);
  }

  ngOnInit() {
    this.CR.getData1().subscribe(data => {
      this.datageting = data;
      this.artical = this.datageting.msg;
    });
    this.dynamicForm = this.fb.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
    });


    this.CR.getData4().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    });
    this.CR.getData().subscribe(data => {
      this.datageting1 = data;
      this.tabledata1 = this.datageting1.msg;
    })
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  customerselect(index) {
    console.log(index);
    this.FN = this.tabledata1[index].FirstName;
    this.LN = this.tabledata1[index].LastName;
    this.PH = this.tabledata1[index].Phone;
    this.ADD = this.tabledata1[index].MadinaAddress;

  }
  onCourseSend() {
    const Co = {
      FACTNUMBER: "INVOICE NO." + this.random,
      Date: this.today,
      Warehouse: this.Warehouse,
      FirstName: this.FN,
      LastName: this.LN,
      Phone: this.PH,
      Address: this.ADD,
      InvoiceData: this.dynamicForm.value.tickets,
      TotalInvoice: this.TotalAdd,
    }
    console.log(Co);
    this.CR.Invoice(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/InvoiceList');
    }, 2000);

  }
  somethingChanged(event, i) {
    this.singletotal[i] = event
  }
  somethingChanged1(event, i) {
    this.singletotal[i] = Number(this.singletotal[i]) * Number(event);
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
