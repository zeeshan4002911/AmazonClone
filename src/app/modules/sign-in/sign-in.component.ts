import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/defaultData/userData';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  email = '';
  password = '';
  error = '';

  loginValidator() {
    const email_flag = this.email.match('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
      ? true
      : false;

    const password_flag = this.password.length >= 8 ? true : false;
    if (!email_flag && !password_flag) {
      this.error = 'Invalid Email & password';
    } else if (!email_flag) {
      this.error = 'Invalid Email';
    } else if (!password_flag) {
      this.error = `Invalid_password`;
    }
    setTimeout(() => (this.error = ''), 3000);

    const EMAIL = this.email.toLowerCase();
    const PASSWORD = this.password;
    this.email = '';
    this.password = '';

    // Stop Execution for failed input format validation
    if (!email_flag || !password_flag) return;

    for (let user of users) {
      if (user.email == EMAIL && user.password == PASSWORD) {
        console.log('success', user.name);
        
        window.localStorage.setItem('auth', JSON.stringify(user));
        return this.router.navigate(['/home']);
      }
    }
    this.error = 'Login Failed, Incorrect Credentials';
    return setTimeout(() => (this.error = ''), 3000);
  }
}
