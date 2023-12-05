import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruopInfoComponent } from './gruop-info.component';

describe('GruopInfoComponent', () => {
  let component: GruopInfoComponent;
  let fixture: ComponentFixture<GruopInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GruopInfoComponent]
    });
    fixture = TestBed.createComponent(GruopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
