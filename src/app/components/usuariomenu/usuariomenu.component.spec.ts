import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariomenuComponent } from './usuariomenu.component';

describe('UsuariomenuComponent', () => {
  let component: UsuariomenuComponent;
  let fixture: ComponentFixture<UsuariomenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariomenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariomenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
