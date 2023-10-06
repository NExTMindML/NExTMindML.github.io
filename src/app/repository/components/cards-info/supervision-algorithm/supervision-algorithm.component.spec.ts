import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisionAlgorithmComponent } from './supervision-algorithm.component';

describe('SupervisionAlgorithmComponent', () => {
  let component: SupervisionAlgorithmComponent;
  let fixture: ComponentFixture<SupervisionAlgorithmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisionAlgorithmComponent]
    });
    fixture = TestBed.createComponent(SupervisionAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
