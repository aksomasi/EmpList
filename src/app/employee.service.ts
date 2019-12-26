import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://dummy.restapiexample.com/api/v1/';


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employees');
  }

  saveEmployee(emp): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'create', emp);
  }

  updateEmployee(emp): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'update/' + emp.id, emp);
  }

  deleteEmployee(id): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'delete/' + id);
  }


}
