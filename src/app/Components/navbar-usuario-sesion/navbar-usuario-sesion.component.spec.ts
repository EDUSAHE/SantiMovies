import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUsuarioSesionComponent } from './navbar-usuario-sesion.component';

describe('NavbarUsuarioSesionComponent', () => {
  let component: NavbarUsuarioSesionComponent;
  let fixture: ComponentFixture<NavbarUsuarioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUsuarioSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarUsuarioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
