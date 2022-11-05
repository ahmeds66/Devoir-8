import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
  onLoggedin() {
    console.log(this.user);
    let isValidUser: boolean = this.authService.SignIn(this.user);
    if (isValidUser) 
      this.router.navigate(['/']);
    else
    //alert("Login ou mot de passe incorrect");
    this.erreur=1;
  }
}