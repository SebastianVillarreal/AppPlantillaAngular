import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BookTableComponent } from './book-table/book-table.component';
import { MatTableModule } from '@angular/material/table'; // Importar MatTableModule
import { HttpClientModule } from '@angular/common/http';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoTableComponent } from './componentes/alumnos-table/alumnos-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BookTableComponent,
    BookFormComponent,
    AlumnoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule, // Añadir MatTableModule
    HttpClientModule, // Añadir HttpClientModule aquí
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
