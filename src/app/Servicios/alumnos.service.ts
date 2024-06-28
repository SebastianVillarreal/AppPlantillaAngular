import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



interface Alumno {
  Id: string;
  Matricula: string;
  Nombre: string;
  ApPaterno: string;
  ApMaterno: string;
  Direccion: string;
  Estatus: string;
  Usuario: string;
  FechaRegistra: string;
}


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = 'https://localhost:5031/api/'; // Cambia esta URL por la de tu API
  private registrosUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'GetAlumnos');
  }
}