import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

    private apiUrl = 'https://localhost:5031/api/'
    private registrosUpdate = new Subject<void>();
  constructor(private http:HttpClient) { }

  getAlumnos(): Observable<any>{
    return this.http.get<any>(this.apiUrl + 'GetAlumnos');
  }
}