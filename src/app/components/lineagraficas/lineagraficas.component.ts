import { Component, OnInit } from '@angular/core';
import { LineagraficaService } from '../../services/lineagrafica.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Lineagrafica } from 'src/app/models/lineagrafica';
import { User } from "../../models/user";

@Component({
  selector: 'app-lineagraficas',
  templateUrl: './lineagraficas.component.html',
  styleUrls: ['./lineagraficas.component.css']
})
export class LineagraficasComponent implements OnInit {

  constructor(private lineagraficaService: LineagraficaService,private router: Router) { }
  public usserLogged:User;
  public loli1:number;
  public loli2:number;
  public loli3:number;
  public color1:number;
  public color2:number;
  public color3:number;
  public boy1:number;
  public boy2:number;
  public girl1:number;
  public girl2:number;
  public background1:number;
  public background2:number;


  ngOnInit() {
    this.loli1 = 0;
    this.loli2 = 0;
    this.loli3 = 0;

    this.color1 = 0;
    this.color2 = 0;
    this.color3 = 0;

    this.boy1 = 0;
    this.boy2 = 0;
 
    this.girl1 = 0;
    this.girl2 = 0;

    this.background1 = 0;
    this.background2 = 0;
    this.usserLogged=JSON.parse(localStorage.getItem("currentUser"));

    if(this.usserLogged!=null){
      if(this.usserLogged.roles=="administrador"){
        this.getLineagraficas();
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
  getLineagraficas() {
    this.lineagraficaService.getLineagraficas()
      .subscribe(res => {
        this.lineagraficaService.lineagraficas = res as Lineagrafica[];

        this.lineagraficaService.lineagraficas.forEach(element => {
          switch (element.loli) {
            case "1":
              this.loli1++;
              break;
            case "2":
              this.loli2++;
              break;
            case "3":
              this.loli3++;
              break;
            default:
              break;
          }

          switch (element.color) {
            case "1":
              this.color1++;
              break;
            case "2":
              this.color2++;
              break;
            case "3":
              this.color3++;
              break;
            default:
              break;
          }

          switch (element.boy) {
            case "1":
              this.boy1++;
              break;
            case "2":
              this.boy2++;
              break;
            default:
              break;
          }


          switch (element.girl) {
            case "1":
              this.girl1++;
              break;
            case "2":
              this.girl2++;
              break;
            default:
              break;
          }


          switch (element.background) {
            case "1":
              this.background1++;
              break;
            case "2":
              this.background2++;
              break;
            default:
              break;
          }


          
        });
      });
  }
  

}
