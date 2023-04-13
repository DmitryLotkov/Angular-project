import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passMinLength = 3
  loginForm!: FormGroup
  displayInputData() {
    console.log(this.loginForm.value)
    this.loginForm.reset()

  }
  get email(){
    return this.loginForm.get('email')
  }
  get pass(){
    return this.loginForm.get('pass')
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ]),
      pass: new FormControl("", [
        Validators.required,
        Validators.minLength(this.passMinLength),
      ])
    })
  }
}
