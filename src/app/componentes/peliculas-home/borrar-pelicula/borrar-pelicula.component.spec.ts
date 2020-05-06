import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPeliculaComponent } from './borrar-pelicula.component';

describe('BorrarPeliculaComponent', () => {
  let component: BorrarPeliculaComponent;
  let fixture: ComponentFixture<BorrarPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
