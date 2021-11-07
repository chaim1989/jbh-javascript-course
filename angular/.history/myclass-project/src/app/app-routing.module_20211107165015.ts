import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appendFile } from 'fs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userarea',component:RegisterComponent},
  {path:'userarea1',component:RegisterComponent},
  {path:'userarea2',component:RegisterComponent},
  {path:'userarea3',component:RegisterComponent}
];
app.get(["/"])
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
