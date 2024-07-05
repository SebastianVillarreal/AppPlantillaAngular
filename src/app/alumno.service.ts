import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

interface Alumno {
  Id: string;
  Matricula: string;
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Direccion: string;
}

@Injectable({
  providedIn: "root",
})
export class AlumnoService {
  private apiUrl = "https://localhost:5031/api/GetAlumnos"; // Cambia esta URL por la de tu API
  private registrosUpdated = new Subject<void>();

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
