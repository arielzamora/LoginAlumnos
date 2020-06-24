import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAcargoComponent } from './materias-acargo.component';

describe('MateriasAcargoComponent', () => {
  let component: MateriasAcargoComponent;
  let fixture: ComponentFixture<MateriasAcargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasAcargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAcargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
