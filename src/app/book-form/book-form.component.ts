import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private registroService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.registroService.createRegistro(this.bookForm.value).subscribe(() => {
        this.bookForm.reset();
        this.registroService.getBooks();  // Actualiza la lista de registros
      });
    }
  }
}
