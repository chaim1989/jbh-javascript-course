import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { ComposeMsgComponent } from './compose-msg/compose-msg.component';


@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.scss']
})
export class MsgsComponent implements OnInit {

  constructor(
    private apiService:ApiService,
    private modalService: NgbModal
    ) { }
  msgs:any=[];
  current_user_id:any;
  current_tab:string ="inbox";
  ngOnInit(): void {
    this.current_user_id =  localStorage.getItem("user_id");
    this.fetchmsgs();

  }
  fetchmsgs() {
    this.apiService._get("msgs").subscribe({
      next: (data:any) => { 
        this.msgs = data;
        
      },
      error: () => { }
    })
  }
  
  
  get incoming_msgs(){
    return this.msgs.filter((x:any)=>{
        return !x.to_user_id || x.to_user_id ==this.current_user_id;
    })
  }
  get outgoing_msgs(){
    return this.msgs.filter((x:any)=>{
        return  x.from_user_id ==this.current_user_id;
    })
  }
 
  getSubjectFromMsgContent(msg:any){
    if(msg.subject){
      return msg.subject;
    }
    return msg.content.split(' ').slice(0,3).join(" ");
  }
  copmoseMsg(){
    this.modalService.open(ComposeMsgComponent,{backdrop: 'static',size: 'lg', keyboard: false, centered: true})
    .result.then(
      (result) => {
        if(result){
          this.fetchmsgs();
        }

    })
  }
}
