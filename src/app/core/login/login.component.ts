import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    this.submitted = true;
  
    if (this.loginForm.invalid) {
      return;
    }
  
    this.authService.login(email, password).subscribe(
      response => {
        // Handle successful login here
        console.log(response);
        this.router.navigate(['/home']);
      },
      error => {
        // Handle login error here
        console.error(error);
        this.error = 'Invalid email or password.';
      }
    );
  
}
}
