import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: [ './add-employee.component.scss' ],
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private employeeService: EmployeeService) {
  }

  addForm: FormGroup;

  ngOnInit() {

    if (this.data) {
      this.addForm = this.formBuilder.group({
        id: [ this.data.id ],
        name: [ this.data.employee_name, Validators.required ],
        age: [ this.data.employee_age, Validators.required ],
        salary: [ this.data.employee_salary, Validators.required ],
      });
    } else {
      this.addForm = this.formBuilder.group({
        id: [],
        name: [ '', Validators.required ],
        age: [ '', Validators.required ],
        salary: [ '', Validators.required ],
      });
    }


  }

  close(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.data) {
      this.employeeService.updateEmployee(this.addForm.value).subscribe(value => {
        this.dialogRef.close({ result: 'User Updated' });
      });
    } else {
      this.employeeService.saveEmployee(this.addForm.value).subscribe(value => {
        this.dialogRef.close({ result: 'User Added' });
      });
    }


  }
}
