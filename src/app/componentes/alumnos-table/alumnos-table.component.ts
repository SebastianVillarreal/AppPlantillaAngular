import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../servicios/alumnos-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno-table',
  templateUrl: './alumnos-table.component.html',
  styleUrl: './alumnos-table.component.css'
})
export class AlumnoTableComponent implements OnInit {

  alumnos = [];
  displayedColumns: string[] = ['Id', 'Matricula', 'Nombre', 'ApPaterno', 'ApMaterno', 'Direccion', 'Estatus', 'Usuario Registra', 'Fecha Registro'];

  constructor(private alumnosService: AlumnoService) { }


  ngOnInit() {
    this.getRegistros();

    // Escuchar las actualizaciones
    this.alumnosService.getAlumnos().subscribe(() => {
      this.getRegistros();
    });
  }

  getRegistros() {
    this.alumnosService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

}
