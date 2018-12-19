import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: Admin = {
    userName: null,
    password: null
  }
  constructor(private _router: Router) {
  }

  authenticateAdmin(admin: Admin) {
    console.log("Admin logged in");
    console.log( this.admin);
    window.localStorage.setItem('admin', JSON.stringify(this.admin));
    this._router.navigate(['provider-list']);
  }
  ngOnInit() {
  }

}
