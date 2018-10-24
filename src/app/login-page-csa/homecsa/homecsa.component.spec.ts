import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecsaComponent } from './homecsa.component';

describe('HomecsaComponent', () => {
  let component: HomecsaComponent;
  let fixture: ComponentFixture<HomecsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
