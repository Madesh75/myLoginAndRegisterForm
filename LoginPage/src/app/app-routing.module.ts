import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGreetingComponent } from './login-greeting/login-greeting.component';
import { SignupGreetingComponent } from './signup-greeting/signup-greeting.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{path: 'login', component:LoginComponent},
{path:'login-greeting',component:LoginGreetingComponent},
{path: 'login-greeting/:email', component: LoginGreetingComponent},
{ path: 'signup', component: SignupComponent }, 
{path:'signup-greeting',component:SignupGreetingComponent},
{path: 'signup-greeting/:name', component: SignupGreetingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
