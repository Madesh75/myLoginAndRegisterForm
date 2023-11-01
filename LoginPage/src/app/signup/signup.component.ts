import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
      
  }
  signupForms = new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@gmail\.com$')]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    dob:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required),
    language:new FormControl("",Validators.required),
  })
  submitted = false;
  get name():FormControl{
    return this.signupForms.get("name") as FormControl;
  }
  get email():FormControl{
    return this.signupForms.get("email") as FormControl;
  }
  get password():FormControl{
    return this.signupForms.get("password") as FormControl;
  }
  get dob():FormControl{
    return this.signupForms.get("dob") as FormControl;
  }
  get gender():FormControl{
    return this.signupForms.get("gender") as FormControl;
  }
  get language(): FormControl {
    return this.signupForms.get("language") as FormControl;
  }
  

signedup() {
  this.submitted = true;
  if (this.signupForms.valid) {
    const nameControl = this.signupForms.get('name');
    const name = nameControl ? nameControl.value : ''; 
    this.router.navigate(['/signup-greeting', { name: name }]);
  }
}
}
