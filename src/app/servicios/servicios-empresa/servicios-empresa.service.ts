import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpresaService {
  backend = environment.backend+"/servicio-empresa";

  constructor(private http: HttpClient) { }

  registrarServicioEmpresa(servicio_empresa:any){
    return this.http.post(`${this.backend}/crear-servicio-empresa`,{servicio_empresa});
  }
  obtenerServicioEmpresa(){
    return this.http.get(`${this.backend}/obtener-servicios-empresa`);
  }
  eliminarServicioEmpresa(id_servicio_empresa:String){
    return this.http.delete(`${this.backend}/eliminar-servicio-empresa-por-id/${id_servicio_empresa}`);
  }
}
