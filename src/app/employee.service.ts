import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:8000/employee/"

  constructor(private http: HttpClient){ }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
     .pipe(catchError(this.errorHandler));
   }
   errorHandler(error: HttpErrorResponse){
     return throwError(error.message || "Server Error")
}
}