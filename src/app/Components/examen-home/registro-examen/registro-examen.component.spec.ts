import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroExamenComponent } from './registro-examen.component';

describe('RegistroExamenComponent', () => {
  let component: RegistroExamenComponent;
  let fixture: ComponentFixture<RegistroExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
