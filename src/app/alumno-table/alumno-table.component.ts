import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumno-table',
  templateUrl: './alumno-table.component.html',
  styleUrl: './alumno-table.component.css'
})
export class AlumnoTableComponent implements OnInit {

  alumnos = [];
  displayedColumns: string[] = ['Id', 'Nombre', 'ApPaterno', 'ApMaterno', 'Direccion', 'Estatus'];

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
