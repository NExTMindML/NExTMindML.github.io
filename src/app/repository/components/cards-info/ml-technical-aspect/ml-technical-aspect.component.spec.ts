import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlTechnicalAspectComponent } from './ml-technical-aspect.component';

describe('MlTechnicalAspectComponent', () => {
  let component: MlTechnicalAspectComponent;
  let fixture: ComponentFixture<MlTechnicalAspectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MlTechnicalAspectComponent]
    });
    fixture = TestBed.createComponent(MlTechnicalAspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
