import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private employees: IEmployee[] = [];

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: any) {
    this.employees.push(employee);
  }

  removeEmployee(employee: any) {
    this.employees = this.employees.filter((e) => e !== employee);
  }

  markAsRemote(employee: any) {
    const index = this.employees.findIndex((e) => e.id === employee.id);

    if (index > -1) {
      this.employees[index].remote = !this.employees[index].remote;
    }
  }
}
