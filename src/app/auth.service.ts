import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  loginUser(user:any)
  {
    return this.http.post<any>("http://localhost:5000/login",user);
  }
  newUser(item:any)
  {
    return this.http.post<any>("http://localhost:5000/signup",{"user":item})
    .subscribe(data=>{console.log(data)})
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
