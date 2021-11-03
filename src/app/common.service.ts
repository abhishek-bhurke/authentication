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
 public Name(_user1: string)
 {

 }
  myData = {
}
 submit(_user:any): Observable<any>{
 
  return this._http.post("https://testffc.nimapinfotech.com/api/Account/LoginWithOTP",{
    emailOrMobileNo: "7506118428",
    otp: 7607
  });
}
 
getdata(){
  const user = { username: 'abhishekbhurke@nimapinfotech.com', password: 'nimap@25091999' }
 
return this._http.post("https://testffc.nimapinfotech.com/api/CRM/Leads", {});
} 
submit1(_user1:any): Observable<any>{
      
  return this._http.post("https://testffc.nimapinfotech.com/api/CRM/AddLead",{
    LeadName: _user1.LeadName,
    MobileNo: _user1.MobileNo 
  });
}
isLoggedin(){
  if(localStorage.getItem('token'))
  { 
    return true;
  }
  else
  {
    return false;
  }
}
retrieveUser()
{
  return this._http.get("http://localhost:3000/users");
}
}