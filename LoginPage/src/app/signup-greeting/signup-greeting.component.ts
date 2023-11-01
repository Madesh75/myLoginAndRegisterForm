import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup-greeting',
  templateUrl: './signup-greeting.component.html',
  styleUrls: ['./signup-greeting.component.css'],
})
export class SignupGreetingComponent implements OnInit {
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name') || ''; 
    });
  }
}
