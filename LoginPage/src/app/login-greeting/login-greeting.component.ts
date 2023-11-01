import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-greeting',
  templateUrl: './login-greeting.component.html',
  styleUrls: ['./login-greeting.component.css']
})
export class LoginGreetingComponent implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.email = params.get('email') || ''; 
    });
  }
 
}
