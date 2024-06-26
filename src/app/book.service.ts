import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

interface Book {
  _id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000/book'; // Cambia esta URL por la de tu API
  private registrosUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // createRegistro(registro: Omit<Book, '_id' | 'createdAt' | 'updatedAt'>): Observable<Book> {
  //   return this.http.post<Book>(`${this.apiUrl}`, registro);
  // }

  createRegistro(registro: Omit<Book, '_id' | 'createdAt' | 'updatedAt'>): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/registros`, registro)
      .pipe(tap(() => {
        this.registrosUpdated.next();
      }));
  }

  deleteRegistro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(tap(() => {
        this.registrosUpdated.next();
      }));
  }

  getRegistrosUpdatedListener(): Observable<void> {
    return this.registrosUpdated.asObservable();
  }
}
