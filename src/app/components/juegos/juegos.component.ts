import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }
  user: Users;

  ngOnInit() {
    if(localStorage.getItem("currentUser")==undefined){
      this.router.navigate(['/user/login']);
    }
  }

  

}


