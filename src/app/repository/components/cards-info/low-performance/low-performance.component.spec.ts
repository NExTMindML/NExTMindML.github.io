import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPerformanceComponent } from './low-performance.component';

describe('LowPerformanceComponent', () => {
  let component: LowPerformanceComponent;
  let fixture: ComponentFixture<LowPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowPerformanceComponent]
    });
    fixture = TestBed.createComponent(LowPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
