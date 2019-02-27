import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineagraficaencuestaComponent } from './lineagraficaencuesta.component';

describe('LineagraficaencuestaComponent', () => {
  let component: LineagraficaencuestaComponent;
  let fixture: ComponentFixture<LineagraficaencuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineagraficaencuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineagraficaencuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
