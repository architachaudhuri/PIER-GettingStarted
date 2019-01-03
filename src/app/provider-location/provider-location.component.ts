import { Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider';
import { Admin } from '../models/admin';
import { HoursOfOperation } from '../models/hours-of-operation';
import { ProviderService } from '../service/provider-service.service';
import { Router } from '@angular/router';
import { ProviderOpHours } from '../models/provider-op-hours';

@Component({
  selector: 'app-provider-location',
  templateUrl: './provider-location.component.html',
  styleUrls: ['./provider-location.component.css']
})
export class ProviderLocationComponent implements OnInit {

  provider: Provider = null;
  admin: Admin = null;
  hoursOfOperation: HoursOfOperation[] = [];
  opHour: HoursOfOperation = null;
  providerOpHours: ProviderOpHours = new ProviderOpHours();
  //   columnDefs = [
  //     {headerName: 'Day(s)', field: 'days' },
  //     {headerName: 'Opening Time', field: 'openingHours' },
  //     {headerName: 'Closing Time', field: 'closingHours'}
  // ];

  // rowData: any;

  constructor(private _providerService: ProviderService, private _router:Router) { }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem("admin"));
    this.provider = JSON.parse(localStorage.getItem("provider"));
    console.log("selected provider details--location:");
    console.log(this.provider);
    this.hoursOfOperation = this._providerService.getHoursOfOperations();
    console.log("On load");
    console.log(this.hoursOfOperation);
  }

  editOpHours(opHourForm: HoursOfOperation) {
    console.log(opHourForm);
    window.localStorage.setItem('savedOpHours', JSON.stringify(opHourForm));
    this._router.navigate(['hours-of-operation']);
  }
}
