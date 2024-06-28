import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTableComponent } from './alumnos-table.component';

describe('AlumnosTableComponent', () => {
  let component: AlumnoTableComponent;
  let fixture: ComponentFixture<AlumnoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
