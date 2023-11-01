import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGreetingComponent } from './signup-greeting.component';

describe('SignupGreetingComponent', () => {
  let component: SignupGreetingComponent;
  let fixture: ComponentFixture<SignupGreetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupGreetingComponent]
    });
    fixture = TestBed.createComponent(SignupGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
