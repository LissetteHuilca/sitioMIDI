import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {



  constructor(private authService: AuthService, private router: Router, private location: Location, private route: ActivatedRoute ) { }
  public isError = false;
  public msgError = '';

  user = {
    password: '',
    confirmPass: '',
    codigo: this.route.snapshot.paramMap.get('codigo')
  }

  ngOnInit() {
    if(this.user.codigo){
      this.router.navigate(['/restore/user']);
    }else{
      this.router.navigate(['/inicio']);
    }
  }

  changePassword(form: NgForm) {
        if(form.valid){
          this.authService
            .passwordUser(this.user)
            .subscribe(user => {
              setTimeout(() => {
                this.router.navigate(['/user/login']);
              }, 500);
            },
            res => {
              this.msgError = "La contraseña ya fue actualizada";
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
