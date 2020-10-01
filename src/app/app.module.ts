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
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoustomerListComponent,
    RegisterNewCoustomerComponent,
    CustomerinfoComponent,
    ListofArticalsComponent,
    AddArticalsComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
