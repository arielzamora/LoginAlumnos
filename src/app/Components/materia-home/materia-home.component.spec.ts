import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaHomeComponent } from './materia-home.component';

describe('MateriaHomeComponent', () => {
  let component: MateriaHomeComponent;
  let fixture: ComponentFixture<MateriaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
