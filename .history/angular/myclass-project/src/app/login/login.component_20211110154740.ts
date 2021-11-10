import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { }
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
      this.http.post( environment.apiUrl + 'auth/login', this.loginForm.value)
        .subscribe({
          next: (data) => {
            console.log(data);
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
