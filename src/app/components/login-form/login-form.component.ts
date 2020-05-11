import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isFormSubmitted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(loginFormData : NgForm) {
    this.isFormSubmitted = true;
    console.log(loginFormData);
  }

}
