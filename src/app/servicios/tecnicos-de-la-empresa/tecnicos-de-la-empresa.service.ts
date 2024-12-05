import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TecnicosDeLaEmpresaService {
  backend = environment.backend+"/profesional";

  constructor(private http: HttpClient) { }

  registrarProfesional(profesional:any){
    return this.http.post(`${this.backend}/crear-profesional`,{profesional});
  }
  obtenerProfesionales(){
    return this.http.get(`${this.backend}/obtener-profesionales`);
  }
  eliminarProfesional(id_profesional:String){
    return this.http.delete(`${this.backend}/eliminar-profesional-por-id/:id_profesional${id_profesional}`);
  }
}