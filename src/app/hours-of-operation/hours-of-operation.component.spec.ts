import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursOfOperationComponent } from './hours-of-operation.component';

describe('HoursOfOperationComponent', () => {
  let component: HoursOfOperationComponent;
  let fixture: ComponentFixture<HoursOfOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursOfOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursOfOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
