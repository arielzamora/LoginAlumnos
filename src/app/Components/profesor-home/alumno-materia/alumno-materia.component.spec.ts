import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoMateriaComponent } from './alumno-materia.component';

describe('AlumnoMateriaComponent', () => {
  let component: AlumnoMateriaComponent;
  let fixture: ComponentFixture<AlumnoMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
