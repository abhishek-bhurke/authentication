import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeadsComponent } from './leads/leads.component';
const routes: Routes = [
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'leads',
    component: LeadsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
