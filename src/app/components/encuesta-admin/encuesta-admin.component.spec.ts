import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaAdminComponent } from './encuesta-admin.component';

describe('EncuestaAdminComponent', () => {
  let component: EncuestaAdminComponent;
  let fixture: ComponentFixture<EncuestaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
