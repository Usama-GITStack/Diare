import { AddExitVouchersComponent } from './Components/add-exit-vouchers/add-exit-vouchers.component';
import { AddEntryVouchersComponent } from './Components/add-entry-vouchers/add-entry-vouchers.component';
import { NewInvoiceComponent } from './Components/new-invoice/new-invoice.component';
import { InvoiceListComponent } from './Components/invoice-list/invoice-list.component';
import { SaleDocumentsComponent } from './Components/sale-documents/sale-documents.component';
import { AddNewWarehouseComponent } from './Components/add-new-warehouse/add-new-warehouse.component';
import { WarehouseComponent } from './Components/warehouse/warehouse.component';
import { ListofWarehouseComponent } from './Components/listof-warehouse/listof-warehouse.component';
import { StockMovementListComponent } from './Components/stock-movement-list/stock-movement-list.component';
import { NewgoodexitComponent } from './Components/newgoodexit/newgoodexit.component';
import { ListOfExitVouchersComponent } from './Components/list-of-exit-vouchers/list-of-exit-vouchers.component';
import { NewEntryVouchersComponent } from './Components/new-entry-vouchers/new-entry-vouchers.component';
import { ListOfEntryVouchersComponent } from './Components/list-of-entry-vouchers/list-of-entry-vouchers.component';
import { StockDocumentComponent } from './Components/stock-document/stock-document.component';
import { AddArticalsComponent } from './Components/add-articals/add-articals.component';
import { CustomerinfoComponent } from './Components/customerinfo/customerinfo.component';
import { RegisterNewCoustomerComponent } from './Components/register-new-coustomer/register-new-coustomer.component';
import { CoustomerListComponent } from './Components/coustomer-list/coustomer-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofArticalsComponent } from './Components/listof-articals/listof-articals.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'CustomerList', component: CoustomerListComponent },
  { path: 'RegisterCustomer', component: RegisterNewCoustomerComponent },
  { path: 'CustomerInfo', component: CustomerinfoComponent },
  { path: 'ListofArticals', component: ListofArticalsComponent },
  { path: 'AddArticals', component: AddArticalsComponent },
  { path: 'StockDocument', component: StockDocumentComponent },
  { path: 'ListOfEntryVouchers', component: ListOfEntryVouchersComponent },
  { path: 'NewEntryVouchers', component: NewEntryVouchersComponent },
  { path: 'ListOfExitVouchers', component: ListOfExitVouchersComponent },
  { path: 'Newgoodexit', component: NewgoodexitComponent },
  { path: 'StockMovementList', component: StockMovementListComponent },
  { path: 'ListofWarehouse', component: ListofWarehouseComponent },
  { path: 'Warehouse', component: WarehouseComponent },
  { path: 'AddNewWarehouse', component: AddNewWarehouseComponent },
  { path: 'SaleDocuments', component: SaleDocumentsComponent },
  { path: 'InvoiceList', component: InvoiceListComponent },
  { path: 'NewInvoice', component: NewInvoiceComponent },
  { path: 'AddEntryVouchers', component: AddEntryVouchersComponent },
  { path: 'AddExitVouchers', component: AddExitVouchersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
