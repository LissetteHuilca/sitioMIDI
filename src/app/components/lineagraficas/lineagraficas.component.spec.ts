import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineagraficasComponent } from './lineagraficas.component';

describe('LineagraficasComponent', () => {
  let component: LineagraficasComponent;
  let fixture: ComponentFixture<LineagraficasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineagraficasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineagraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
