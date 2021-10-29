import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
 public UserId(_user: string){

  //  this.user=user;
 }
  myData = {
  emailOrMobileNo: "7506118428",
  otp: 8031
}
 submit(_user:any): Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });
  const user = {
    emailOrMobileNo: "7506118428",
    otp: 8031
  }
  return this._http.post("https://testffc.nimapinfotech.com/api/Account/LoginWithOTP",{
    emailOrMobileNo: "7506118428",
    otp: 8031
  }, {headers: headers});
}
 
getdata(){
  const user = { username: 'abhishekbhurke@nimapinfotech.com', password: 'nimap@25091999' }
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Authorization': `Basic bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=`
  });
return this._http.post("https://testffc.nimapinfotech.com/api/CRM/Leads", {}, {headers: headers});
} 
}