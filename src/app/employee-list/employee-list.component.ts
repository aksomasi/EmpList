import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeService } from '../employee.service';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: [ './employee-list.component.scss' ],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'salary', 'age', 'action' ];
  dataSource: any;
  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private employeeService: EmployeeService, private _snackBar: MatSnackBar) {
  }


  ngOnInit() {
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.employeeService.getEmployees().subscribe(value => {
      this.dataSource = new MatTableDataSource<Employee>(value.reverse());
      this.dataSource.paginator = this.paginator;

    });
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      this._snackBar.open(result.result, '', {
        duration: 3000,
      });
      this.getEmployeesList();
    });
  }

  editEmployee(value) {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: value,
    });

    dialogRef.afterClosed().subscribe(result => {
      this._snackBar.open(result.result, '', {
        duration: 3000,
      });
      this.getEmployeesList();
    });

  }

  deleteEmployee(value) {
    this.employeeService.deleteEmployee(value.id).subscribe(value1 => {
      this._snackBar.open('User Deleted', '', {
        duration: 3000,
      });
      this.getEmployeesList();
    });
  }


}
