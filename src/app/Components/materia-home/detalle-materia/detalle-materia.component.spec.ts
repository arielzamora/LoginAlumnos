import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMateriaComponent } from './detalle-materia.component';

describe('DetalleMateriaComponent', () => {
  let component: DetalleMateriaComponent;
  let fixture: ComponentFixture<DetalleMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
