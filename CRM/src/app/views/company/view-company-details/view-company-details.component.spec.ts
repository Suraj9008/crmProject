import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyDetailsComponent } from './view-company-details.component';

describe('ViewCompanyDetailsComponent', () => {
  let component: ViewCompanyDetailsComponent;
  let fixture: ComponentFixture<ViewCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompanyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
