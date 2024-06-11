import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../interfaces/IEmployee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent {
  employees: IEmployee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }

  removeEmployee(employee: IEmployee): void {
    this.employeesService.removeEmployee(employee);
    this.employees = this.employeesService.getEmployees(); // Refresh the list
  }

  markAsRemote(employee: IEmployee): void {
    this.employeesService.markAsRemote(employee);
  }
}
