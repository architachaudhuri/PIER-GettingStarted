import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderLocationComponent } from './provider-location/provider-location.component';

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
  path: 'location',
  component: ProviderLocationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
