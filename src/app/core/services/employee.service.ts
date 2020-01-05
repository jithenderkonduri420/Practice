import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class EmployeeService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
      return this.http.get(this.apiUrl + `/employee`);
    }
    create(emp: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.apiUrl + `/employee/create`, emp);
    }
    delete(id): Observable<any> {
        return this.http.get(this.apiUrl + `/employee/` + id);
      }
    put(emp: Employee, id): Observable<Employee> {
        return this.http.put<Employee>(this.apiUrl + `/employee/` + id, emp);
      }
    getSingel(id): Observable<any> {
        return this.http.get(this.apiUrl + `/employee/emp/` + id);
      }

  }
