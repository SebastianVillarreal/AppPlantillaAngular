import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  books = [];
  displayedColumns: string[] = ['_id', 'title', 'description', 'author', 'category', 'createdAt', 'updatedAt', 'actions'];

  constructor(private bookService: BookService) { }
  

  ngOnInit() {
    this.getRegistros();

    // Escuchar las actualizaciones
    this.bookService.getRegistrosUpdatedListener().subscribe(() => {
      this.getRegistros();
    });
  }


  getRegistros() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }


  editRegistro(registro: any) {
    // Implementa la lógica para editar el registro
    console.log('Edit registro:', registro);
  }


  deleteRegistro(id: string) {
    console.log('Delete registro con ID:', id);
    this.bookService.deleteRegistro(id).subscribe(() => {
      this.getRegistros();
    });
  }
}
