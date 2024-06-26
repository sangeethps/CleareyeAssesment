import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class QuestionnaireModule {
}
