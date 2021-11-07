import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showErrors:boolean = false;
  loginForm = new FormGroup({
  username:new FormControl(''),
  password:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    
  }
  onLoginSubmit():void{
    this.showErrors = true;
    
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.
    }else{
      
    }
    // if(this.loginForm.Stat)
  }
}
