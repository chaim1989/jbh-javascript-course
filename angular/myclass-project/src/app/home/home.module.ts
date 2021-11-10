import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeComponent } from './home.component';
import { MsgsComponent } from './msgs/msgs.component';


@NgModule({
  declarations: [
    MainHomeComponent,
    HomeComponent,
    MsgsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
