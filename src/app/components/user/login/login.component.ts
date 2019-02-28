import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { PasswordService } from '../../../services/password.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location, private passwordService: PasswordService, private userService: UserService ) { }

  private user: Users = {
    email: '',
    password: ''

  };
  public isError = false;
  public loginError = "";
  public showLogin = true;


  public passError = "";

  ngOnInit() { }

  onLogin(form: NgForm) {
    if (form.valid) {
          return this.authService
        .loginuser(this.user.email, this.user.password)
        .subscribe(
          data => {
            this.authService.setUserLoggedIn(data);
            this.router.navigate(['/juegos']);
            location.reload();
          },
          error =>{
            this.loginError = error.error.status;
            setTimeout(() => {
              this.loginError = "";
            }, 4000);
          }
        );
        
      
    } else {
  this.loginError = "Campos son requeridos";
  this.onIsError();
}
}

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
      this.loginError = "";
    }, 4000);
  }

  tooglePasswordRestore(){
    this.showLogin = !this.showLogin;
  }

  enviarRestaurar(form: NgForm) {
    
    this.passwordService.sendMessagePass(form.value).subscribe(() => {
      alert('Se ha enviado un mensaje a su correo');
    }, error => {
      console.log('Error', error);
    });

    
    setTimeout(() => {
      this.tooglePasswordRestore();
    }, 4000);

  }
  
    
}


