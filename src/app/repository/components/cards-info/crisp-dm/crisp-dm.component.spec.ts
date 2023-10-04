import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRISPDMComponent } from './crisp-dm.component';

describe('CRISPDMComponent', () => {
  let component: CRISPDMComponent;
  let fixture: ComponentFixture<CRISPDMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRISPDMComponent]
    });
    fixture = TestBed.createComponent(CRISPDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
