import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSubTitleComponent } from './mini-sub-title.component';

describe('MiniSubTitleComponent', () => {
  let component: MiniSubTitleComponent;
  let fixture: ComponentFixture<MiniSubTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniSubTitleComponent]
    });
    fixture = TestBed.createComponent(MiniSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
