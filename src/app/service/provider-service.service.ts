import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { HoursOfOperation } from '../models/hours-of-operation';
import { ProviderOpHours } from '../models/provider-op-hours';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  hoursOfOperation: HoursOfOperation[] = [{
    days: 'MONDAY',
    openingHours: '09:00 AM PST',
    closingHours: '05:00 PM PST'
  },
  {
    days: 'TUESDAY',
    openingHours: 'Open 24 hours',
    closingHours: ''
  },
  {
    days: 'WEDNESDAY',
    openingHours: '11:00 AM PST',
    closingHours: '06:00 PM PST'
  },
  {
    days: 'THURSDAY',
    openingHours: 'Open 24 hours',
    closingHours: ''
  },
  {
    days: 'FRIDAY',
    openingHours: '01:00 PM PST',
    closingHours: '05:00 PM PST'
  },
  {
    days: 'SATURDAY',
    openingHours: 'By appointment only',
    closingHours: ''
  },
  {
    days: 'SUNDAY',
    openingHours: 'Office is closed',
    closingHours: ''
  }]
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

  constructor() { }

  getProviderDetails(providerId: string): Provider {
    console.log("inside getProviderDetails");
    console.log(providerId);
    return this.providerList.find(provider => provider.providerId === providerId);
  }

  getProviderList(): Provider[] {
    return this.providerList;
  }

  getHoursOfOperations(providerID: string): HoursOfOperation[] {
    return this.hoursOfOperation;
  }

  saveHours(providerHours: ProviderOpHours) {
    let updatedHours: HoursOfOperation = {
      days: '',
      openingHours: '',
      closingHours: ''
    };
    updatedHours.days = providerHours.day;
    updatedHours.openingHours = providerHours.openingHours;
    updatedHours.closingHours = providerHours.closingHours;
    if (providerHours.isClosed == true) {
      updatedHours.openingHours = "Office is closed";
      updatedHours.closingHours = '';
    } else if (providerHours.openAlways == true) {
      updatedHours.openingHours = "Opens 24 hours";
      updatedHours.closingHours = '';
    } else if (providerHours.appointmentOnly == true) {
      updatedHours.openingHours = "By appointment only";
      updatedHours.closingHours = '';
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
