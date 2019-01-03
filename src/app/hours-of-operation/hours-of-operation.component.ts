import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { Provider } from '../models/provider';
import { ProviderOpHours } from '../models/provider-op-hours';
import { HoursOfOperation } from '../models/hours-of-operation';
import { forEach } from '@angular/router/src/utils/collection';
import { ProviderService } from '../service/provider-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hours-of-operation',
  templateUrl: './hours-of-operation.component.html',
  styleUrls: ['./hours-of-operation.component.css']
})
export class HoursOfOperationComponent implements OnInit {

  isEnable: boolean = true;
  admin: Admin = null;
  provider: Provider = null;
  savedOpHour: HoursOfOperation = null;
  providerOpHours: ProviderOpHours = {
    day: '',
    openingHours: '',
    closingHours: '',
    appointmentOnly: false,
    openAlways: false,
    isClosed: false,
    providerID: '',
    isSelected: true,
    isOpen: false,
    isClose: false
  };

  constructor(private _providerService: ProviderService, private _router: Router) { }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem("admin"));
    this.provider = JSON.parse(localStorage.getItem("provider"));
    this.savedOpHour = JSON.parse(localStorage.getItem("savedOpHours"));
    this.setProviderOpHours(this.savedOpHour);
  }

  isChecked() {
    if (this.providerOpHours.isClosed) {
      this.providerOpHours.isOpen = false;
      this.providerOpHours.isClose = false;
      this.providerOpHours.openingHours = '';
      this.providerOpHours.closingHours = '';
      this.providerOpHours.openAlways = false;
      this.providerOpHours.appointmentOnly = false;
    }
    if (this.providerOpHours.openAlways || this.providerOpHours.appointmentOnly) {
      this.providerOpHours.isOpen = false;
      this.providerOpHours.isClose = false;
      this.providerOpHours.openingHours = '';
      this.providerOpHours.closingHours = '';
    }
  }

  setProviderOpHours(savedOpHour: HoursOfOperation) {
    let daySelected = savedOpHour["days"];
    console.log(daySelected);
    this.providerOpHours.day = daySelected;
    this.providerOpHours.openingHours = savedOpHour["openingTime"];
    this.providerOpHours.closingHours = savedOpHour["closingTime"];
    if (this.providerOpHours.openingHours === "By appointment only") {
      this.providerOpHours.appointmentOnly = true;
      this.providerOpHours.isClosed = false;
      this.providerOpHours.isSelected = true;
      this.providerOpHours.openingHours = '';
      this.providerOpHours.openAlways = false;
    } else if (this.providerOpHours.openingHours === "Office is closed") {
      this.providerOpHours.isClosed = true;
      this.providerOpHours.openingHours = '';
      this.providerOpHours.isSelected = true;
    } else if (this.providerOpHours.openingHours === "Open 24 hours") {
      this.providerOpHours.openAlways = true;
      this.isEnable = false;
      this.providerOpHours.isClosed = false;
      this.providerOpHours.isSelected = true;
      this.providerOpHours.openingHours = '';
    } else if (this.providerOpHours.openingHours && this.providerOpHours.closingHours) {
      this.providerOpHours.isSelected = true;
      this.providerOpHours.isClosed = false;
      this.providerOpHours.isOpen = true;
      this.providerOpHours.isClose = true;
    }
    console.log(this.providerOpHours);
  }

  saveHours(providerHours: ProviderOpHours) {
    console.log("Save hours:");
    console.log(providerHours);
    this._providerService.saveHours(providerHours);
    this._router.navigate(['physical-location']);
  }

}
