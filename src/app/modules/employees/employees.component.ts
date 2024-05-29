import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  fileName: string = '';

  constructor() {
  }

  uploadFile(event: any) {
    const files: File[] = event.target.files;
    if (files.length) {
      this.fileName = files[0].name;
      let texts: any = [];

    }
    event.target.value = '';
  }

}
