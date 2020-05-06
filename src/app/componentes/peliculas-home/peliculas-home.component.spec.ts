import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasHomeComponent } from './peliculas-home.component';

describe('PeliculasHomeComponent', () => {
  let component: PeliculasHomeComponent;
  let fixture: ComponentFixture<PeliculasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
