import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,AfterViewInit {

  constructor() {}

  ngOnInit(): void {
   alert("123") 
  }

}