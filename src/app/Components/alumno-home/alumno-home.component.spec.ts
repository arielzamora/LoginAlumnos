import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoHomeComponent } from './alumno-home.component';

describe('AlumnoHomeComponent', () => {
  let component: AlumnoHomeComponent;
  let fixture: ComponentFixture<AlumnoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
