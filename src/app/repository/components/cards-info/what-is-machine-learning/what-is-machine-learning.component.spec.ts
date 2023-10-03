import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsMachineLearningComponent } from './what-is-machine-learning.component';

describe('WhatIsMachineLearningComponent', () => {
  let component: WhatIsMachineLearningComponent;
  let fixture: ComponentFixture<WhatIsMachineLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIsMachineLearningComponent]
    });
    fixture = TestBed.createComponent(WhatIsMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
