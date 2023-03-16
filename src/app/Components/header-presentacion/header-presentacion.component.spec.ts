import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPresentacionComponent } from './header-presentacion.component';

describe('HeaderPresentacionComponent', () => {
  let component: HeaderPresentacionComponent;
  let fixture: ComponentFixture<HeaderPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPresentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
