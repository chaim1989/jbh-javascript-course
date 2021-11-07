import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular-example';
  username:string ='משתמש ברירת מחדל';
  temp_username:string ='';
  users:[] = [
    {id:1,name:"חיים הכהן"},
    {id:2,name:"יחיאל טופורביץ"},
    {
      id:3,name:"בנימין דויטש"
    }

  ]
}
