import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidneyCaseComponent } from './kidney-case.component';

describe('KidneyCaseComponent', () => {
  let component: KidneyCaseComponent;
  let fixture: ComponentFixture<KidneyCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidneyCaseComponent]
    });
    fixture = TestBed.createComponent(KidneyCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
