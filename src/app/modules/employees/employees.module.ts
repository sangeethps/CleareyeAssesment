import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule { }
