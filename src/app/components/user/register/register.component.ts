import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location ) { }

  user = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    roles:'usuario'
  }

  public isError = false;
  public msgError = '';

  ngOnInit() {
  }

  onRegister(form: NgForm){ 
    if(form.valid){
      this.authService
        .registerUser(this.user)
        .subscribe(user => {
          this.authService.setUserLoggedIn(user);
          this.router.navigate(['/juegos']);
          location.reload();
        },
        res => {
          this.msgError = "Usuario ya existe";
          this.onIsError();
        });
    } else {
      this.onIsError();
    }
    
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
}


}
