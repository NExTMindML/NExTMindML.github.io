import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPageInfoComponent } from './not-page-info.component';

describe('NotPageInfoComponent', () => {
  let component: NotPageInfoComponent;
  let fixture: ComponentFixture<NotPageInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotPageInfoComponent]
    });
    fixture = TestBed.createComponent(NotPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
