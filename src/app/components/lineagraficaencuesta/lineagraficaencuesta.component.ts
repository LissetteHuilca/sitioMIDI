import { Component, OnInit } from '@angular/core';
import { LineagraficaencuestaService } from '../../services/lineagraficaencuesta.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Lineagrafica } from 'src/app/models/lineagrafica';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-lineagraficaencuesta',
  templateUrl: './lineagraficaencuesta.component.html',
  styleUrls: ['./lineagraficaencuesta.component.css'],
  providers: [LineagraficaencuestaService]
})
export class LineagraficaencuestaComponent implements OnInit {
  private linea: Lineagrafica;
  public usserLogged:User;

  constructor(private lineagraficaencuestaService: LineagraficaencuestaService, private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.usserLogged=JSON.parse(localStorage.getItem("currentUser"));
    this.linea = new Lineagrafica();
   
  }
  addLineaGrafica(form: NgForm) {
    this.lineagraficaencuestaService.postLineagrafica(form.value)
      .subscribe(res => {
        this.usserLogged.estadolineagrafica="si";
        this.userService.putUser(this.usserLogged)
        .subscribe(res => {
          localStorage.setItem('currentUser', JSON.stringify(this.usserLogged));
        window.open("inicio","_self","")
        });
        
     
       
   
       
      });
  }



  seleccionarLoli(nombre: string) {
    this.linea.loli = nombre;
  }
  seleccionarColor(nombre: string) {
    this.linea.color = nombre;
  }
  seleccionarBoy(nombre: string) {
    this.linea.boy = nombre;
  }
  seleccionarGirl(nombre: string) {
    this.linea.girl = nombre;
  }
  seleccionarBack(nombre: string) {
    this.linea.background = nombre;
  }
}
