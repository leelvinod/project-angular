import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsaadminComponent } from './csaadmin.component';

describe('CsaadminComponent', () => {
  let component: CsaadminComponent;
  let fixture: ComponentFixture<CsaadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsaadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
