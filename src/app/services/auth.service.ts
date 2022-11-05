import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : any  =[{"username":"admin","password":"admin","roles":['ADMIN']},
                  {"username":"user","password":"user","roles":['USER']}];
  public loggedUser!:string;
  public isloggedIn: Boolean = false; 
  public roles!:string[];
  constructor(private router: Router) { }

  logout() {
    this.isloggedIn = false;
    this.loggedUser!= undefined;
    this.roles!= undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
  SignIn(user: User): any {
    let validUser : boolean = false;
    this.users.forEach((curUser: { username: string; password: string; roles: string[]; }) => {
      if (user.username === curUser.username && user.password === curUser.password){
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isloggedIn));
      }
    });
     return validUser;
  }

  isAdmin(): any {
    if (!this.roles)
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
  }
  setLoggedUserFromLocalStorage(login : any) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username :string){ 
    this.users.forEach((curUser: { username: string; roles: string[]; }) => { if( curUser.username == username ) 
      { this.roles = curUser.roles; } 
    }); 
  }
}
