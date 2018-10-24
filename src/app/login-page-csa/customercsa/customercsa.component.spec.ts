import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercsaComponent } from './customercsa.component';

describe('CustomercsaComponent', () => {
  let component: CustomercsaComponent;
  let fixture: ComponentFixture<CustomercsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
