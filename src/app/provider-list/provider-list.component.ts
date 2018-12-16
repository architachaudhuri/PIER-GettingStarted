import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';
import { Provider } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  admin: Admin = {
    userName: 'Doe, Jane',
    password: 'xxxx'
  }

  providerList: Provider[] = [{
    firstName: 'Hillary',
    lastName: 'McCarter',
    salutation: 'Dr.',
    providerId: 'HP89079',
    location: 'Tulsa'
  },
  {
    firstName: 'Colt',
    lastName: 'Geller',
    salutation: 'Dr.',
    providerId: 'HP89768',
    location: 'Illinois'
  },
  {
    firstName: 'Arthur',
    lastName: 'Collins',
    salutation: 'Dr.',
    providerId: 'HP87654',
    location: 'Tulsa'
  },
  {
    firstName: 'Derma',
    lastName: 'Tulli',
    salutation: 'Dr.',
    providerId: 'HP87643',
    location: 'Tulsa'
  },
  {
    firstName: 'Jill',
    lastName: 'Kelly',
    salutation: 'Dr.',
    providerId: 'HP12344',
    location: 'Tulsa'
  }]
  constructor(private _router: Router) { }

  ngOnInit() {
  }


}
