import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";
import { Factura } from "../model/factura";

@Injectable()
export class FacturaService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Factura[]>(
      `${environment.endpoint}/factura`,
      this.http.optsName("consultar facturas")
    );
  }

  public guardar(factura: Factura) {
    return this.http.doPost<Factura, boolean>(
      `${environment.endpoint}/factura`,
      factura,
      this.http.optsName("crear/actualizar factura")
    );
  }


}
