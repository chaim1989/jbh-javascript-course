import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as CkEditor from "./../../../../assets/ckeditor"
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-compose-msg',
  templateUrl: './compose-msg.component.html',
  styleUrls: ['./compose-msg.component.scss']
})
export class ComposeMsgComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private apiService: ApiService) { }
  Message: any = {};
  users: any[] = [];
  public Editor
  editor_config = { language: 'he', toolbar: ['heading', 'italic', 'bold', 'alignment'], alignment: { options: ['right', 'left'] } }
  ngOnInit(): void {
    this.Editor = CkEditor;
    this.apiService._get("users").subscribe(
      {
        next: (data: any) => {
          this.users = data;
        }
      }
    )
  }
  close(reason: any) {
    this.activeModal.close(reason);
  }
  save() {
    console.log("Message", this.Message)
    if (!this.Message.to_user_id || !this.Message.content) {
      return;
    }
    this.apiService._post("msgs/createMsg", this.Message).subscribe(
      (body) => { console.log("response", body) },
      (response) => {
        console.log(response);
        if (response.status == 200) {
          this.close(true);
          alert("הודעה נשלחה בהצלחה");
        } else { console.log(response); }
      });

    // {
    //   next: () => {
    //     alert("ההודעה נשלחה בהצלחה")
    //     this.close(true)
    //   }, error: (err) => {
    //     if (err) {
    //       console.log(err)
    //     }
    //     alert("אירעה שגיאה בשליחת ההודעה")
    //   }
    // }
  }
  onChange({ editor }: ChangeEvent) {
    this.Message.content = editor.getData();
  }
}
