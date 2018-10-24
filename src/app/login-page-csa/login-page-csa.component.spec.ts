import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageCSAComponent } from './login-page-csa.component';

describe('LoginPageCSAComponent', () => {
  let component: LoginPageCSAComponent;
  let fixture: ComponentFixture<LoginPageCSAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageCSAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageCSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
