import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from './demo2.component';
import { RouterModule, Routes } from '@angular/router';
import { ReverseGuard } from '../reverse.guard';
const routes: Routes = [
  {
    path:'',
    component: Demo2Component
    // canActivate:[ReverseGuard]
  }
]

@NgModule({
  declarations: [
    Demo2Component
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Demo2Module { }
