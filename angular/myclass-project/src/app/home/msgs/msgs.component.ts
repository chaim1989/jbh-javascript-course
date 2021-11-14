import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.scss']
})
export class MsgsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  msgs:any=[];
  current_user_id:any;
  current_tab:string ="inbox";
  ngOnInit(): void {
    this.current_user_id =  localStorage.getItem("user_id");
    this.fetchmsgs();

  }
  fetchmsgs() {
    this.httpClient.get(environment.apiUrl + "msgs").subscribe({
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
}
