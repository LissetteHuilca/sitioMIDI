import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lineagrafica } from '../models/lineagrafica';

@Injectable({
  providedIn: 'root'
})
export class LineagraficaencuestaService {
  selectedLineagrafica: Lineagrafica;
  lineagraficas: Lineagrafica[];
  readonly URL_API = 'http://localhost:3000/lineagrafica';

  constructor(private http: HttpClient) {
      this.selectedLineagrafica = new Lineagrafica();
   }
   postLineagrafica(Lineagrafica: Lineagrafica){ 
    return this.http.post(this.URL_API, Lineagrafica);
  }
}
