import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questionnaire',
    loadChildren: () => import('./modules/questionnaire/questionnaire.module').then(m => m.QuestionnaireModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: '**',
    redirectTo: 'questionnaire'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
