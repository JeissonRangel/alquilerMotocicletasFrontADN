import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Alquiler } from "../model/alquiler";

@Injectable()
export class AlquilerService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Alquiler[]>(
      `${environment.endpoint}/alquiler`,
      this.http.optsName("consultar alquileres")
    );
  }

  public guardar(producto: Alquiler) {
    return this.http.doPost<Alquiler, boolean>(
      `${environment.endpoint}/alquiler`,
      producto,
      this.http.optsName("crear/actualizar alquiler")
    );
  }

  public eliminar(producto: Alquiler) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/alquiler/${producto.id}`,
      this.http.optsName("eliminar productos")
    );
  }
}
