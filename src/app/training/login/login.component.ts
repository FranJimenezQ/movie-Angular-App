import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "";
  userPassword = "";
  errorMsg = "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userName.trim().length===0)
    {
      this.errorMsg = "Username is required";
    }
      else if(this.userPassword.trim().length===0)
    {
      this.errorMsg = "Password is required";
    }
    else {
      this.errorMsg = "";
      let res = this.auth.login(this.userName, this.userPassword);
        if(res === 200)
          {
            this.router.navigate(['home'])
          }
        if(res === 403)
        {
          this.errorMsg = "Invalid login";
        }
    }
  }

}
