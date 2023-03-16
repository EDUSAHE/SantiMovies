import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosCarteleraComponent } from './comentarios-cartelera.component';

describe('ComentariosCarteleraComponent', () => {
  let component: ComentariosCarteleraComponent;
  let fixture: ComponentFixture<ComentariosCarteleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosCarteleraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
