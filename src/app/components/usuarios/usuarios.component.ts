import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

//declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UserService]

})
export class UsuariosComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }
  public usserLogged:User;
  ngOnInit() {
    this.usserLogged=JSON.parse(localStorage.getItem("currentUser"));
    if(this.usserLogged!=null){
      if(this.usserLogged.roles=="administrador"){
        this.getUsers();
      }else{
        
        this.router.navigate(['/inicio']);
      }
    }else{
      this.router.navigate(['/user/login']);
    }
    
  }

  cerrarsesion(){
    this.router.navigate(['/user/login']);
    localStorage.removeItem("currentUser");
    
    location.reload();
  }

  addUser(form: NgForm) {
    if(form.value._id){
      this.userService.putUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        console.log('Update succesfully');
        this.getUsers();
      });
    }else{
    this.userService.postUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        console.log('Save succesfully');
        this.getUsers();
      });
    }
  }
 
  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }


  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string) {
    if(confirm('Are you sure you want to delete it?')){
    this.userService.deleteUser(_id)
      .subscribe(res => {
      this.getUsers();
      console.log('Deleted succesfully');
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}
