import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBorradosComponent } from './lista-borrados.component';

describe('ListaBorradosComponent', () => {
  let component: ListaBorradosComponent;
  let fixture: ComponentFixture<ListaBorradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBorradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBorradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
