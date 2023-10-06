import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamAlgorithmComponent } from './param-algorithm.component';

describe('ParamAlgorithmComponent', () => {
  let component: ParamAlgorithmComponent;
  let fixture: ComponentFixture<ParamAlgorithmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamAlgorithmComponent]
    });
    fixture = TestBed.createComponent(ParamAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
