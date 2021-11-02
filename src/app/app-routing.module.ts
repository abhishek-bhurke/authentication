import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeadsComponent } from './leads/leads.component';
import { AuthGuard } from './auth.guard';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'leads',
    component: LeadsComponent,
    canActivate:[AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
