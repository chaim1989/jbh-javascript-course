import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  
  _get(url:string){
    return this.httpClient.get(environment.apiUrl + url,{withCredentials:true});
  }
  _post(url:string,body:any){
    return this.httpClient.post(environment.apiUrl + url,body,{withCredentials:true});
  }
  
}
