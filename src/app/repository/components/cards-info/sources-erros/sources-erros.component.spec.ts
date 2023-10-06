import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesErrosComponent } from './sources-erros.component';

describe('SourcesErrosComponent', () => {
  let component: SourcesErrosComponent;
  let fixture: ComponentFixture<SourcesErrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourcesErrosComponent]
    });
    fixture = TestBed.createComponent(SourcesErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
