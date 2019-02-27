import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Encuesta } from '../models/encuesta';
import { EncuestaComponent } from '../components/encuesta/encuesta.component';
@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  selectedEncuesta: Encuesta;
  encuestas: Encuesta[];
  readonly URL_API = 'http://localhost:3000/encuesta';

  constructor(private http: HttpClient) {
    this.selectedEncuesta = new Encuesta();
   }

   getEncuestas(){ 
    return this.http.get(this.URL_API);
  }

  postEncuesta(Encuesta: Encuesta){ 
    return this.http.post(this.URL_API, Encuesta);
  }

  deleteEncuesta(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
