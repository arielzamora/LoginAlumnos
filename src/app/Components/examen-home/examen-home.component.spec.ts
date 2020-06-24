import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenHomeComponent } from './examen-home.component';

describe('ExamenHomeComponent', () => {
  let component: ExamenHomeComponent;
  let fixture: ComponentFixture<ExamenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
