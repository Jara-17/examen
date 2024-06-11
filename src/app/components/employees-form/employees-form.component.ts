import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { generateId } from '../../../utils/utils';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrl: './employees-form.component.css',
})
export class EmployeesFormComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeesService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      position: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      remote: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee = {
        id: generateId(),
        ...this.employeeForm.value,
        avatarUrl: `https://api.multiavatar.com/${this.employeeForm.value.name}.png`,
      };

      this.employeesService.addEmployee(employee);
      this.employeeForm.reset();
    }
  }
}
