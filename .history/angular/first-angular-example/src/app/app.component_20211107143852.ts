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
  users:Object[] = [
    {name:}
    "חיים הכהן"
    ,"יחיאל טופורביץ",
    "אברהם לוינסון"
    ,"בנימין דויטש"
  ]
}
