import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthenService  } from '../../services/authen/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errLoginMessage: string = '';
  errBoolean: boolean = false;

  constructor(
    private authService: AuthenService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if(this.loginForm.invalid) {
      this.errBoolean = true;
      this.errLoginMessage = "Username and Password not empty";
      return;
    }

    if (this.authService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      this.router.navigate(['/overview']);
    } else {
      this.errBoolean = true;
      this.errLoginMessage = "Username or Password wrong!";
    }
  }
}
