import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploifComponent } from './ejemploif.component';

describe('EjemploifComponent', () => {
  let component: EjemploifComponent;
  let fixture: ComponentFixture<EjemploifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
