import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MesProduits';
  constructor(public authService: AuthService,
              public router: Router) { }
  ngOnInit() {
    let isloggedin: any;
    let loggedUser: any;
    isloggedin= localStorage.getItem('isloggedin');
    loggedUser= localStorage.getItem('loggedUser');
    if (isloggedin == 'true' || !loggedUser )
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);; 
  
  }
  onLogout() {
    this.authService.logout();
  }
}