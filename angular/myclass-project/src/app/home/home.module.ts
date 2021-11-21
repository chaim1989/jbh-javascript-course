import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomeComponent } from './home.component';
import { MsgsComponent } from './msgs/msgs.component';
import { ClassStudentComponent } from './class-student/class-student.component';
import { ClassTeacherComponent } from './class-teacher/class-teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ComposeMsgComponent } from './msgs/compose-msg/compose-msg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainHomeComponent,
    HomeComponent,
    MsgsComponent,
    ClassStudentComponent,
    ClassTeacherComponent,
    ComposeMsgComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MomentModule,
    NgbModalModule,
    CKEditorModule,
    FormsModule
  ],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
