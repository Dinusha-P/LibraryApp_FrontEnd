import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User={username:'',
  password:''};

  constructor(private _auth: AuthService, private _router:Router) { }
  loginUser()
  {
    this._auth.loginUser(this.User)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['books'])
      }
    )
  }

  ngOnInit(): void {
  }

}
