import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeComponent } from './home.component';
import { MsgsComponent } from './msgs/msgs.component';
import { ClassStudentComponent } from './class-student/class-student.component';
import { ClassTeacherComponent } from './class-teacher/class-teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    MainHomeComponent,
    HomeComponent,
    MsgsComponent,
    ClassStudentComponent,
    ClassTeacherComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
