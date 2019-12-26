import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [],
  entryComponents: [AddEmployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
