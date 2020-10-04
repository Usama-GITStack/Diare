import { CoustomerRegisterService } from './../Services/coustomer-register.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoustomerListComponent } from './Components/coustomer-list/coustomer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { RegisterNewCoustomerComponent } from './Components/register-new-coustomer/register-new-coustomer.component';
import { CustomerinfoComponent } from './Components/customerinfo/customerinfo.component';
import { ListofArticalsComponent } from './Components/listof-articals/listof-articals.component';
import { AddArticalsComponent } from './Components/add-articals/add-articals.component';
import { StockDocumentComponent } from './Components/stock-document/stock-document.component';
import { ListOfEntryVouchersComponent } from './Components/list-of-entry-vouchers/list-of-entry-vouchers.component';
import { NewEntryVouchersComponent } from './Components/new-entry-vouchers/new-entry-vouchers.component';
import { ListOfExitVouchersComponent } from './Components/list-of-exit-vouchers/list-of-exit-vouchers.component';
import { NewgoodexitComponent } from './Components/newgoodexit/newgoodexit.component';
import { StockMovementListComponent } from './Components/stock-movement-list/stock-movement-list.component';
import { ListofWarehouseComponent } from './Components/listof-warehouse/listof-warehouse.component';
import { WarehouseComponent } from './Components/warehouse/warehouse.component';
import { AddNewWarehouseComponent } from './Components/add-new-warehouse/add-new-warehouse.component';
import { SaleDocumentsComponent } from './Components/sale-documents/sale-documents.component';
import { InvoiceListComponent } from './Components/invoice-list/invoice-list.component';
import { NewInvoiceComponent } from './Components/new-invoice/new-invoice.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEntryVouchersComponent } from './Components/add-entry-vouchers/add-entry-vouchers.component';
import { AddExitVouchersComponent } from './Components/add-exit-vouchers/add-exit-vouchers.component';
import { AddInvoiceComponent } from './Components/add-invoice/add-invoice.component';
import { FilterPipe } from './filter.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { COMMERCIALINVOICEComponent } from './Components/commercialinvoice/commercialinvoice.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserAccessControlComponent } from './Components/user-access-control/user-access-control.component';
import { ListRegulationComponent } from './Components/list-regulation/list-regulation.component';
import { NewRulesComponent } from './Components/new-rules/new-rules.component';
import { NewCheckoutComponent } from './Components/new-checkout/new-checkout.component';
import { CheckoutListComponent } from './Components/checkout-list/checkout-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoustomerListComponent,
    RegisterNewCoustomerComponent,
    CustomerinfoComponent,
    ListofArticalsComponent,
    AddArticalsComponent,
    StockDocumentComponent,
    ListOfEntryVouchersComponent,
    NewEntryVouchersComponent,
    ListOfExitVouchersComponent,
    NewgoodexitComponent,
    StockMovementListComponent,
    ListofWarehouseComponent,
    WarehouseComponent,
    AddNewWarehouseComponent,
    SaleDocumentsComponent,
    InvoiceListComponent,
    NewInvoiceComponent,
    AddEntryVouchersComponent,
    AddExitVouchersComponent,
    AddInvoiceComponent,
    FilterPipe,
    COMMERCIALINVOICEComponent,
    AddUserComponent,
    UserListComponent,
    UserAccessControlComponent,
    ListRegulationComponent,
    NewRulesComponent,
    NewCheckoutComponent,
    CheckoutListComponent,

  ],
  imports: [
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule,
    BrowserAnimationsModule
  ],
  providers: [
    CoustomerRegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
