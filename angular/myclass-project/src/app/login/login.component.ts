import {  HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private apiService: ApiService,private router:Router) { }
  showErrors: boolean = false;

  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  )



  ngOnInit(): void {

  }
  onLoginSubmit() {
    console.log(this.loginForm);
    this.showErrors = true;

    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.apiService._post('auth/login', this.loginForm.value)
        .subscribe({
          next: (data:any) => {
            console.log(data);
            localStorage.setItem("user_id",data.user.id);
            this.router.navigate(["/home"]);
          },
          error: (err:HttpErrorResponse) => {
            alert("פרטי הכניסה שהזנת שגויים")
            
           }
        })
    } else {

    }
    // if(this.loginForm.Stat)
  }
}
