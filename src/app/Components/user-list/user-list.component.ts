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
  fileName = 'ExcelSheet.xlsx';
  Name: String;
  Phone: String;
  Function: String;
  Password: String;
  PasswordC: String;
  UC: String;
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
    let element = document.getElementById("PDF")
    html2canvas(element).then((canvas) => {
      var imdData = canvas.toDataURL('image/png')
      var doc = new jsPDF()
      var imgheight = canvas.height * 208 / canvas.width;
      doc.addImage(imdData, 0, 0, 208, imgheight)
      doc.save('Quiz.pdf');
    });
  }
  ngOnInit() {
    this.CR.getData9().subscribe(data => {
      this.datageting = data;
      this.tabledata = this.datageting.msg;
    })
  }
  openXl(content, index) {
    this.modalService.open(content, { size: 'xl' });
    this.UC = this.tabledata[index].UserCOde;
    this.Name = this.tabledata[index].Name;
    this.Phone = this.tabledata[index].Phone;
    this.Function = this.tabledata[index].Function;
    this.Password = this.tabledata[index].Password;
    this.PasswordC = this.tabledata[index].PasswordC;
  }
  Delete(index) {
    const Co = {
      UserCOde: this.tabledata[index].UserCOde,
    }
    this.CR.UserListRemove(Co);
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


}
