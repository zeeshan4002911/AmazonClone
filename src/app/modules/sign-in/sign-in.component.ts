import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/defaultData/userData';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, AfterViewInit, OnDestroy {
  declare signInForm: FormGroup;
  login_failed: boolean | undefined = false;
  ref: any | undefined = '';
  show: boolean | undefined = false;
  @ViewChild('password_ref') password_ref!: ElementRef | undefined;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    const passwordRegex =
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
    this.signInForm = new FormGroup({
      email_number: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(passwordRegex),
      ]),
    });
  }

  onSubmit() {
    if (this.signInForm.status === 'INVALID') return;

    // Storing format validated email and password in variables
    const EMAIL = this.signInForm.value.email_number.toLowerCase();
    const PASSWORD = this.signInForm.value.password;

    for (let user of users) {
      if (user.email == EMAIL && user.password == PASSWORD) {
        //  Storing user information as auth in local storage
        window.localStorage.setItem('auth', JSON.stringify(user));
        return this.router.navigate(['/home']);
      }
    }

    // Showing error when the data does not match with any user stored data
    this.login_failed = true;
    return setTimeout(() => (this.login_failed = false), 3000);
  }

  get email_number() {
    return this.signInForm.get('email_number');
  }

  get password() {
    return this.signInForm.get('password');
  }

  ngAfterViewInit(): void {
    this.ref = this.renderer.selectRootElement(
      this.password_ref?.nativeElement
    );
  }

  // for password show nd hide
  onClickIconShow() {
    if (this.ref.type === 'password') {
      this.ref.type = 'text';
      this.show = true;
    } else {
      this.ref.type = 'password';
      this.show = false;
    }
  }

  ngOnDestroy(): void {
    this.login_failed = this.ref = this.show = this.password_ref = undefined;
  }
}
