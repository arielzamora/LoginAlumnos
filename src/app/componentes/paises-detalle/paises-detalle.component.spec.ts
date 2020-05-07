import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDetalleComponent } from './paises-detalle.component';

describe('PaisesDetalleComponent', () => {
  let component: PaisesDetalleComponent;
  let fixture: ComponentFixture<PaisesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
