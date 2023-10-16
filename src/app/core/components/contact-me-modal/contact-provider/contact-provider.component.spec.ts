import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProviderComponent } from './contact-provider.component';

describe('ContactProviderComponent', () => {
  let component: ContactProviderComponent;
  let fixture: ComponentFixture<ContactProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactProviderComponent]
    });
    fixture = TestBed.createComponent(ContactProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
