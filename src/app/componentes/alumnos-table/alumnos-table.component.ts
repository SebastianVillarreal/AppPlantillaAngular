import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../Servicios/alumnos.service';

@Component({
  selector: 'app-alumno-table',
  templateUrl: './alumnos-table.component.html',
  styleUrl: './alumnos-table.component.css'
})
export class AlumnoTableComponent implements OnInit {

  alumnos = [];
  displayedColumns: string[] = ['Id', 'Matricula','Nombre', 'ApPaterno', 'ApMaterno', 'Direccion', 'Estatus','UsuarioRegistra','FechaRegistro'];

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
