import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    
  }
  onLoginSubmit():void{
    console.log(this.loginForm);
  }
  get usernmae() { return this.loginForm.get('usernmae'); }

}
