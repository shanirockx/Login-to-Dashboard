import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { username: 'shani', password: 'shani123' };
  submitted = false;
  loginForm!: FormGroup;
  message!: string;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      if (
        this.loginForm.controls['username'].value == this.loginData.username &&
        this.loginForm.controls['password'].value == this.loginData.password
      ) {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        this.message = 'Invalid username and password';
      }
    }
  }
}
