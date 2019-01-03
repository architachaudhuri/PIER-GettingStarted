import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { HoursOfOperation } from '../models/hours-of-operation';
import { ProviderOpHours } from '../models/provider-op-hours';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  hoursOfOperation: HoursOfOperation[] = [{
    id: '',
    days: 'Monday',
    openingTime: '9.00 AM IST',
    closingTime: '6.00 PM IST',
    pfin_id: ''
  },{
    id: '',
    days: 'Tuesday',
    openingTime: 'Open 24 hours',
    closingTime: '',
    pfin_id: ''
  },
  {
    id: '',
    days: 'Wednesday',
    openingTime: 'By appointment only',
    closingTime: null,
    pfin_id: ''
  },
  {
    id: '',
    days: 'Thursday',
    openingTime: 'Open 24 hours',
    closingTime: null,
    pfin_id: ''
  },
  {
    id: '',
    days: 'Friday',
    openingTime: '10.00 AM IST',
    closingTime: '5.00 PM IST',
    pfin_id: ''
  },
  {
    id: '',
    days: 'Saturday',
    openingTime: 'By appointment only',
    closingTime: null,
    pfin_id: ''
  },
  {
    id: '',
    days: 'Sunday',
    openingTime: 'Office is closed',
    closingTime: null,
    pfin_id: ''
  }];
  providerList: Provider[] = [{
    firstName: 'Hillary',
    lastName: 'McCarter',
    salutation: 'Dr.',
    providerId: 'HP89079',
    location: 'Tulsa',
    admin: null,
    hoursOfOperation: []
  },
  {
    firstName: 'Colt',
    lastName: 'Geller',
    salutation: 'Dr.',
    providerId: 'HP89768',
    location: 'Illinois',
    admin: null,
    hoursOfOperation: []
  },
  {
    firstName: 'Arthur',
    lastName: 'Collins',
    salutation: 'Dr.',
    providerId: 'HP87654',
    location: 'Tulsa',
    admin: null,
    hoursOfOperation: []
  },
  {
    firstName: 'Derma',
    lastName: 'Tulli',
    salutation: 'Dr.',
    providerId: 'HP87643',
    location: 'Tulsa',
    admin: null,
    hoursOfOperation: []
  },
  {
    firstName: 'Jill',
    lastName: 'Kelly',
    salutation: 'Dr.',
    providerId: 'HP12344',
    location: 'Tulsa',
    admin: null,
    hoursOfOperation: []
  }]

  constructor(private _http: Http) { }

  getProviderDetails(providerId: string): Provider {
    console.log("inside getProviderDetails");
    console.log(providerId);
    return this.providerList.find(provider => provider.providerId === providerId);
  }

  getProviderList(): Provider[] {
    return this.providerList;
  }

  getHoursOfOperations(): HoursOfOperation[] {
    console.log("Service calling");
    // this.getOperations().subscribe(
    //   res => {
    //     console.log("Response data");
    //     console.log(res);
    //     this.hoursOfOperation = res["hours"];
    //     console.log("Response data: hours");
    //     console.log(res["hours"]);
    //     console.log("Response data: hours op");
    //     console.log(this.hoursOfOperation);
    //   });
    return this.hoursOfOperation;
  }

  // getOperations(): Observable<HoursOfOperation[]> {
  //   console.log("Inside getOperations method");
  //   return this._http.
  //     get(`http://10.21.200.172:8097/users/houroperations/H001984563`).pipe(map((res: Response) => {
  //       return res.json();
  //     }))
  //     ;
  // }

  saveHours(providerHours: ProviderOpHours) {
    let updatedHours: HoursOfOperation = {
      id: '',
      pfin_id: '',
      days: '',
      openingTime: '',
      closingTime: ''
    };
    updatedHours.days = providerHours.day;
    updatedHours.openingTime = providerHours.openingHours;
    updatedHours.closingTime = providerHours.closingHours;
    if (providerHours.isClosed == true) {
      updatedHours.openingTime = "Office is closed";
      updatedHours.closingTime = '';
    } else if (providerHours.openAlways == true) {
      updatedHours.openingTime = "Open 24 hours";
      updatedHours.closingTime = '';
    } else if (providerHours.appointmentOnly == true) {
      updatedHours.openingTime = "By appointment only";
      updatedHours.closingTime = '';
    }
    const index = this.findIndex(this.hoursOfOperation, updatedHours.days);
    this.hoursOfOperation[index] = updatedHours;
    console.log("Updated hours of operation:");
    console.log(this.hoursOfOperation);
  }

  findIndex(hours: HoursOfOperation[], day: string): number {
    let index = 0;
    for (let hour of hours) {
      if (hour.days === day) {
        return index;
      } else {
        index = index + 1;
      }
    }
    console.log("index::", index);
  }
}
