import { Component, OnInit } from '@angular/core';
import { User } from "./models/user";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public usserLogged:User;

  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.getLogged();
  }

  getLogged(){
    this.usserLogged=JSON.parse(this.authService.getUserLoggedIn());
    
  }
  title = 'proyectoscrum';
}
