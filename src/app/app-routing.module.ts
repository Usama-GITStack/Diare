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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
