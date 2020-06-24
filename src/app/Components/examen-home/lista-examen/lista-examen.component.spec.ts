import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExamenComponent } from './lista-examen.component';

describe('ListaExamenComponent', () => {
  let component: ListaExamenComponent;
  let fixture: ComponentFixture<ListaExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
