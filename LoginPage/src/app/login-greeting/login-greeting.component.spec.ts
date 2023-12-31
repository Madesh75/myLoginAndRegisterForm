import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGreetingComponent } from './login-greeting.component';

describe('LoginGreetingComponent', () => {
  let component: LoginGreetingComponent;
  let fixture: ComponentFixture<LoginGreetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginGreetingComponent]
    });
    fixture = TestBed.createComponent(LoginGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
