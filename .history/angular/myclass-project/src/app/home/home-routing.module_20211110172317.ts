import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MsgsComponent } from './msgs/msgs.component';

const routes: Routes = [
  {path:"",component:MainHomeComponent},
  {path:"msgs",component:MsgsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
