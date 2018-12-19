import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderLocationComponent } from './provider-location/provider-location.component';
import { HoursOfOperationComponent } from './hours-of-operation/hours-of-operation.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: LoginComponent
},
{
  path: 'provider-list',
  component: ProviderListComponent
},
{
  path: 'physical-location',
  component: ProviderLocationComponent
},
{
  path: 'hours-of-operation',
  component: HoursOfOperationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
