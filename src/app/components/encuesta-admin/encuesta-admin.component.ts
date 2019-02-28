import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta';
import { Router } from '@angular/router';
import { EncuestaService } from '../../services/encuesta.service';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-encuesta-admin',
  templateUrl: './encuesta-admin.component.html',
  styleUrls: ['./encuesta-admin.component.css'],
  providers: [EncuestaService, UserService]

})
export class EncuestaAdminComponent implements OnInit {

  constructor(private encuestaService: EncuestaService, private userService: UserService,private router: Router) { }
  public totalEncuestas: number;
  public usserLogged:User;
  //pregunta2
  public pregunta2Sur: number;
  public pregunta2Norte: number;
  public pregunta2Centro: number;
  public pregunta2NortePorcen: number;
  public pregunta2CentroPorcen: number;
  public pregunta2SurPorcen: number;

  //pregunta3
  public pregunta3nulo: number;
  public pregunta3basico: number;
  public pregunta3medio: number;
  public pregunta3avanzado: number;
  public pregunta3nuloPorcen: number;
  public pregunta3basicoPorcen: number;
  public pregunta3medioPorcen: number;
  public pregunta3avanzadoPorcen: number;

  //pregunta4
  public pregunta4bajo: number;
  public pregunta4medio: number;
  public pregunta4alto: number;
  public pregunta4bajoPorcen: number;
  public pregunta4medioPorcen: number;
  public pregunta4altoPorcen: number;


  //pregunta5
  public pregunta5seres: number;
  public pregunta5escuela: number;
  public pregunta5animales: number;
  public pregunta5seresPorcen: number;
  public pregunta5escuelaPorcen: number;
  public pregunta5animalesPorcen: number;

  //pregunta6
  public pregunta6padres: number;
  public pregunta6madres: number;
  public pregunta6maestro: number;
  public pregunta6terapeuta: number;
  public pregunta6psicologo: number;
  public pregunta6otro: number;
  public pregunta6padresPorcen: number;
  public pregunta6madresPorcen: number;
  public pregunta6maestroPorcen: number;
  public pregunta6terapeutaPorcen: number;
  public pregunta6psicologoPorcen: number;
  public pregunta6otroPorcen: number;


  //pregunta7
  public pregunta71: number;
  public pregunta72: number;
  public pregunta73: number;
  public pregunta71Porcen: number;
  public pregunta72Porcen: number;
  public pregunta73Porcen: number;


  //pregunta8
  public pregunta81: number;
  public pregunta82: number;
  public pregunta83: number;
  public pregunta81Porcen: number;
  public pregunta82Porcen: number;
  public pregunta83Porcen: number;




  ngOnInit() {
    this.getUsuarios();
    this.getEncuestas();
    this.getRespuestas();
    this.totalEncuestas = 0;
    //pregunta2
    this.pregunta2Centro = 0;
    this.pregunta2Norte = 0;
    this.pregunta2Sur = 0;
    this.pregunta2NortePorcen = 0;
    this.pregunta2CentroPorcen = 0;
    this.pregunta2SurPorcen = 0;

    //pregunta3
    this.pregunta3nulo = 0;
    this.pregunta3basico = 0;
    this.pregunta3medio = 0;
    this.pregunta3avanzado = 0;
    this.pregunta3nuloPorcen = 0;
    this.pregunta3basicoPorcen = 0;
    this.pregunta3medioPorcen = 0;
    this.pregunta3avanzadoPorcen = 0;


    //pregunta4
    this.pregunta4bajo = 0;
    this.pregunta4medio = 0;
    this.pregunta4alto = 0;
    this.pregunta4altoPorcen = 0;
    this.pregunta4medioPorcen = 0;
    this.pregunta4altoPorcen = 0;

    //pregunta5
    this.pregunta5seres = 0;
    this.pregunta5escuela = 0;
    this.pregunta5animales = 0;
    this.pregunta5seresPorcen = 0;
    this.pregunta5escuelaPorcen = 0;
    this.pregunta5animalesPorcen = 0;

    //pregunta6
    this.pregunta6maestro = 0;
    this.pregunta6padres = 0;   
    this.pregunta6madres = 0;    
    this.pregunta6madres = 0;
    this.pregunta6terapeuta = 0;
    this.pregunta6psicologo = 0;
    this.pregunta6otro = 0;
    this.pregunta6padresPorcen = 0;
    this.pregunta6maestroPorcen = 0;
    this.pregunta6terapeutaPorcen = 0;
    this.pregunta6psicologoPorcen = 0;
    this.pregunta6otroPorcen = 0;


    //pregunta7
    this.pregunta71 = 0;
    this.pregunta72 = 0;
    this.pregunta73 = 0;
    this.pregunta71Porcen = 0;
    this.pregunta72Porcen = 0;
    this.pregunta73Porcen = 0;

    //pregunta8
    this.pregunta81 = 0;
    this.pregunta82 = 0;
    this.pregunta83 = 0;
    this.pregunta81Porcen = 0;
    this.pregunta82Porcen = 0;
    this.pregunta83Porcen = 0;
    this.usserLogged=JSON.parse(localStorage.getItem("currentUser"));
    if(this.usserLogged!=null){
      if(this.usserLogged.roles=="administrador"){
        this.router.navigate(['/encuestaAdmin']);
      }else{
        
        this.router.navigate(['/inicio']);
      }
    }else{
      this.router.navigate(['/user/login']);
    }


  }
  getRespuestas() {
    this.encuestaService.getEncuestas()
      .subscribe(res => {
        this.encuestaService.encuestas = res as Encuesta[];
        
        this.totalEncuestas = this.encuestaService.encuestas.length;
        this.encuestaService.encuestas.forEach(element => {
        
          //pregunta3
          switch (element.pregunta3) {
            case "nulo":
              this.pregunta3nulo++;
              this.pregunta3nuloPorcen = this.getPorcentaje(this.pregunta3nulo);
              break;
            case "basico":
              this.pregunta3basico++;
              this.pregunta3basicoPorcen = this.getPorcentaje(this.pregunta3basico);
              break
            case "medio":
              this.pregunta3medio++;
              this.pregunta3medioPorcen = this.getPorcentaje(this.pregunta3medio);
              break;
            case "avanzado":
              this.pregunta3avanzado++;
              this.pregunta3avanzadoPorcen = this.getPorcentaje(this.pregunta3avanzado);
              break;
            default:
              break;
          }


          //pregunta4
          switch (element.pregunta4) {
            case "bajo":
              this.pregunta4bajo++;
              this.pregunta4bajoPorcen = this.getPorcentaje(this.pregunta4bajo);
              break;
            case "medio":
              this.pregunta4medio++;
              this.pregunta4medioPorcen = this.getPorcentaje(this.pregunta4medio);
              break
            case "alto":
              this.pregunta4alto++;
              this.pregunta4altoPorcen = this.getPorcentaje(this.pregunta4alto);
              break;
            default:
              break;
          }

          //pregunta5
          switch (element.pregunta5) {
            case "seres":
              this.pregunta5seres++;
              this.pregunta5seresPorcen = this.getPorcentaje(this.pregunta5seres);
              break;
            case "escuela":
              this.pregunta5escuela++;
              this.pregunta5escuelaPorcen = this.getPorcentaje(this.pregunta5escuela);
              break
            case "animales":
              this.pregunta5animales++;
              this.pregunta5animalesPorcen = this.getPorcentaje(this.pregunta5animales);
              break;
            default:
              break;
          }

          //pregunta6
          switch (element.pregunta6) {
            case "padres":
              this.pregunta6padres++;
              this.pregunta6padresPorcen = this.getPorcentaje(this.pregunta6padres);
              break;
              case "madres":
              this.pregunta6madres++;
              this.pregunta6madresPorcen = this.getPorcentaje(this.pregunta6madres);
              break;
          
            case "maestro":
              this.pregunta6maestro++;
              this.pregunta6maestroPorcen = this.getPorcentaje(this.pregunta6maestro);
              break
            case "terapeuta":
              this.pregunta6terapeuta++;
              this.pregunta6terapeutaPorcen = this.getPorcentaje(this.pregunta6terapeuta);
              break;

            case "psicologo":
              this.pregunta6psicologo++;
              this.pregunta6psicologoPorcen = this.getPorcentaje(this.pregunta6psicologo);
              break;

            case "otro":
              this.pregunta6otro++;
              this.pregunta6otroPorcen = this.getPorcentaje(this.pregunta6otro);
              break;
            default:
              break;
          }

          //pregunta7
          switch (element.pregunta7) {
            case "1":
              this.pregunta71++;
              this.pregunta71Porcen = this.getPorcentaje(this.pregunta71);
              break;
            case "2":
              this.pregunta72++;
              this.pregunta72Porcen = this.getPorcentaje(this.pregunta72);
              break
            case "3":
              this.pregunta73++;
              this.pregunta73Porcen = this.getPorcentaje(this.pregunta73);
              break;
            default:
              break;
          }


            //pregunta8
            switch (element.pregunta8) {
              case "1":
                this.pregunta81++;
                this.pregunta81Porcen = this.getPorcentaje(this.pregunta81);
                break;
              case "2":
                this.pregunta82++;
                this.pregunta82Porcen = this.getPorcentaje(this.pregunta82);
                break
              case "3":
                this.pregunta83++;
                this.pregunta83Porcen = this.getPorcentaje(this.pregunta83);
                break;
              default:
                break;
            }

        });
      });
  }


  getEncuestas() {
    this.encuestaService.getEncuestas()
      .subscribe(res => {
        this.encuestaService.encuestas = res as Encuesta[];
      });
  }
  getUsuarios() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

  getPorcentaje(v: number): number {
    let aux = 100 * v;
    let aux2 = aux / this.totalEncuestas;
    return aux2;
  }


  cerrarsesion(){
    this.router.navigate(['/user/login']);
    localStorage.removeItem("currentUser");
    
    location.reload();
  }
  
    downloadJson(){
    var sJson = JSON.stringify(this.encuestaService.encuestas);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "primer-server-task.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
}
  
}
