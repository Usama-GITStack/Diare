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
  datageting1: any;
  Warehouse: String;
  FirstName: String;
  LastName: String;
  Email: String;
  Phone: String;
  Address: String;
  table12: any;
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
  singletotal: any;
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
    for (var i = 0; i < this.dynamicForm.value.tickets.length; i++) {
      this.TotalAdd = this.TotalAdd + parseInt(this.dynamicForm.value.tickets[i].TOTAL);
      console.log(this.TotalAdd);
    }
    this.table12 = this.dynamicForm.value.tickets;
    console.log(this.dynamicForm.value.tickets);
  }
  ngOnInit() {
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
  onCourseSend() {
    const Co = {
      FACTNUMBER: "INVOICE NO." + this.random,
      Date: this.today,
      Warehouse: this.Warehouse,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Phone: this.Phone,
      Address: this.Address,
      InvoiceData: this.dynamicForm.value.tickets,
      TotalInvoice: this.TotalAdd,
    }
    console.log(Co);
    this.CR.Invoice(Co);
    setTimeout(() => {
      this.router.navigateByUrl('/InvoiceList');
    }, 2000);

  }
  somethingChanged(event) {
    this.singletotal = event
  }
  somethingChanged1(event) {
    this.singletotal = Number(this.singletotal) * Number(event);
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
