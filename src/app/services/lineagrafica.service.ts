import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lineagrafica } from '../models/lineagrafica';
import { LineagraficasComponent } from '../components/lineagraficas/lineagraficas.component';

@Injectable({
  providedIn: 'root'
})
export class LineagraficaService {
  
  selectedLineagrafica: Lineagrafica;
  lineagraficas: Lineagrafica[];
  readonly URL_API = 'http://localhost:3000/lineagrafica';
  
  constructor(private http: HttpClient) {
    this.selectedLineagrafica = new Lineagrafica();
  }

  getLineagraficas(){ 
    return this.http.get(this.URL_API);
  }

  postLineagrafica(Lineagrafica: Lineagrafica){ 
    return this.http.post(this.URL_API, Lineagrafica);
  }

  putLineagrafica(lineagrafica: Lineagrafica){ 
    return this.http.put(this.URL_API + `/${lineagrafica._id}`, lineagrafica);
  }

  deleteLineagrafica(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}
