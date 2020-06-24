import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnoComponent } from './lista-alumno.component';

describe('ListaAlumnoComponent', () => {
  let component: ListaAlumnoComponent;
  let fixture: ComponentFixture<ListaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
