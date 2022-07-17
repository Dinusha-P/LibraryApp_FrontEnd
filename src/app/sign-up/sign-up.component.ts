import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {


  constructor(private _auth: AuthService, private _router:Router) { }
  User={username:'',
  password:''};
  psw:any;

  signupUser()
  {
    this._auth.newUser(this.User)
    console.log("called");
    alert("Signup Success");
    this._router.navigate(['login']);
  }
  confirmPsw()
{
  if(this.User.password===this.psw)
  {
    return false;
  }
  else
  return true;
}

  ngOnInit(): void {
  }

}


