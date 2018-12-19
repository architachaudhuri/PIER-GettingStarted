import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import {CheckboxModule} from 'primeng/checkbox';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderLocationComponent } from './provider-location/provider-location.component';
import { HoursOfOperationComponent } from './hours-of-operation/hours-of-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProviderListComponent,
    ProviderLocationComponent,
    HoursOfOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    CheckboxModule,
    TriStateCheckboxModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
