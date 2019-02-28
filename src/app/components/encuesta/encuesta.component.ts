import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Encuesta } from 'src/app/models/encuesta';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../services/user.service';

declare var M: any;
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  providers: [EncuestaService]
})
export class EncuestaComponent implements OnInit {
  
  constructor(private encuestaService: EncuestaService,private authService: AuthService,private router: Router) { }
  public usserLogged:User;
  ngOnInit() {
    this.getLogged();
      console.log("usuer",this.usserLogged);
    if(this.usserLogged!=null){
      if(this.usserLogged.roles=="usuario"){
       
      }else{
        this.router.navigate(['/inicio']);
      }
    }else{
      this.router.navigate(['/user/login']);
    }
    
  }

  addEncuesta(form: NgForm) {
    form.value.user_id = this.usserLogged._id
    this.encuestaService.postEncuesta(form.value)
      .subscribe(res => {
       window.open("inicio","_self","")
      });
    }
  
    getLogged(){
      this.usserLogged=JSON.parse(this.authService.getUserLoggedIn());
      
    }

}
