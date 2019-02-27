import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location ) { }
  public isError = false;
  public msgError = '';

  user = {
    password: '',
    confirmPass: ''
  }

  ngOnInit() {
    
  }

  changePassword(form: NgForm) {
        if(form.valid){
          this.authService
            .passwordUser(this.user)
            .subscribe(user => {

              console.log(user);
              
              setTimeout(() => {
                this.router.navigate(['/user/login']);
              }, 500);

              ///location.reload();
            },
            res => {
              this.msgError = "Usuario ya existe";
              console.log(res);
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
