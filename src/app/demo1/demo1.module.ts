import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1.component';
import { RouterModule, Routes } from '@angular/router';
import { ReverseGuard } from '../reverse.guard';
const routes: Routes = [
  {
    path:'',
    component: Demo1Component
    // canActivate:[ReverseGuard]
  }
]

@NgModule({
  declarations: [
    Demo1Component
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class Demo1Module { }
