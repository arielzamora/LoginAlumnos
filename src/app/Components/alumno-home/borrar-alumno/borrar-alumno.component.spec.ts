import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAlumnoComponent } from './borrar-alumno.component';

describe('BorrarAlumnoComponent', () => {
  let component: BorrarAlumnoComponent;
  let fixture: ComponentFixture<BorrarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
