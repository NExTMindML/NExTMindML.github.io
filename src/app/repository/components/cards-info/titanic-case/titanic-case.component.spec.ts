import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanicCaseComponent } from './titanic-case.component';

describe('TitanicCaseComponent', () => {
  let component: TitanicCaseComponent;
  let fixture: ComponentFixture<TitanicCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitanicCaseComponent]
    });
    fixture = TestBed.createComponent(TitanicCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
