import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasActoresComponent } from './peliculas-actores.component';

describe('PeliculasActoresComponent', () => {
  let component: PeliculasActoresComponent;
  let fixture: ComponentFixture<PeliculasActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
