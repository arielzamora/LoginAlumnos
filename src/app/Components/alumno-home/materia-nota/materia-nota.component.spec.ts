import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaNotaComponent } from './materia-nota.component';

describe('MateriaNotaComponent', () => {
  let component: MateriaNotaComponent;
  let fixture: ComponentFixture<MateriaNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
