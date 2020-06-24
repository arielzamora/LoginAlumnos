import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorMateriaComponent } from './profesor-materia.component';

describe('ProfesorMateriaComponent', () => {
  let component: ProfesorMateriaComponent;
  let fixture: ComponentFixture<ProfesorMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
