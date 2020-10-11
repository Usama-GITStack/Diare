import { Component, OnInit } from '@angular/core';
import { CoustomerRegisterService } from './../../../Services/coustomer-register.service';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private CR: CoustomerRegisterService, public config: NgbModalConfig, public modalService: NgbModal) { }
  datageting: any = {};
  tabledata = [];
  dataTable: any;
  fileName = 'UserList.xlsx';
  Name: String;
  Phone: String;
  Function: String;
  Password: String;
  PasswordC: String;
  UC: String;
  message: any;
  exportexcel() {
    console.log("Usama")
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
    this.SavePDF();
  }
  public SavePDF() {
    let element = document.getElementById("excel-table")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('UserList.pdf');
    });
  }
  ngOnInit() {
    this.CR.getData9().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
    this.UC = this.tabledata[this.message].UserCOde;
    this.Name = this.tabledata[this.message].Name;
    this.Phone = this.tabledata[this.message].Phone;
    this.Function = this.tabledata[this.message].Function;
    this.Password = this.tabledata[this.message].Password;
    this.PasswordC = this.tabledata[this.message].PasswordC;
  }
  Delete() {
    const Co = {
      UserCOde: this.tabledata[this.message].UserCOde,
    }

    this.CR.UserListRemove(Co);
    setTimeout(() => {
      this.CR.getData9().subscribe(data => {
        this.datageting = data;
        this.tabledata = this.datageting.msg;
      })
    }, 1500);
  }
  openSm(content1, i) {
    this.modalService.open(content1, { size: 'sm' });
    this.message = i
    console.log(this.message)
  }
  openSm2(content2, i) {
    this.modalService.open(content2, { size: 'sm' });
    this.message = i
    console.log(this.message)
  }
  onCourseSend() {
    const Co = {
      UserCOde: this.UC,
      Name: this.Name,
      Phone: this.Phone,
      Function: this.Function,
      Password: this.Password,
      PasswordC: this.PasswordC
    }
    console.log(Co);
    this.CR.UserUpdate(Co);
  }

  UpdatedAuto() {
    setTimeout(() => {
      this.CR.getData9().subscribe(data => {
        this.datageting = data;
        this.tabledata = this.datageting.msg;
      })
    }, 1500);
  }
  openSm3(content3) {
    this.modalService.open(content3, { size: 'sm' });
  }

}
