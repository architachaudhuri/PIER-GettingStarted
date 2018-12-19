import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';
import { Provider } from '../models/provider';
import { ProviderService } from '../service/provider-service.service';

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

  provider: Provider = null;

  providerList: Provider[] = [];
  constructor(private _router: Router, private _providerService: ProviderService) { }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem("admin"));
    console.log("admin logged in details:");
    console.log(this.admin);
    this.providerList = this._providerService.getProviderList();
  }

  routeToProviderDetail(providerId: string) {
    console.log(providerId + " clicked");
    this.provider = this._providerService.getProviderDetails(providerId);
    window.localStorage.setItem('provider', JSON.stringify(this.provider));
    this._router.navigate(['physical-location']);
  }

}
