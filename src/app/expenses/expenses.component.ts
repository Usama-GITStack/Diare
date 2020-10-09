import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoustomerRegisterService } from '../../Services/coustomer-register.service';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  Referance: String;
  Date: String;
  Amount: String;
  Note: String;
  Category: String;
  random: any
  constructor(private CR: CoustomerRegisterService, private router: Router) { }

  ngOnInit() {
    this.random = Math.floor((Math.random() * 10000) + 1);
  }
  onCourseSend() {
    const Co = {
      Referance: this.random,
      Date: this.Date,
      Amount: this.Amount,
      Note: this.Note,
      Category: this.Category
    }
    console.log(Co);
    this.CR.UserAdd(Co);
    this.router.navigateByUrl('/ExpensesList');
  }
}
