import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Motocicleta } from "../model/motocicleta";

@Injectable()
export class MotocicletaService {
    constructor(protected http: HttpService){}

        public consultar() {
            return this.http.doGet<Motocicleta[]>(
                `${environment.endpoint}/motocicleta`,
                this.http.optsName("consultar motocicletas")
            );
        }

        public guardar(motocicleta: Motocicleta) {
            return this.http.doPost<Motocicleta, boolean>(
                `${environment.endpoint}/motocicleta`,
                motocicleta,
                this.http.optsName("crear/actualizar motocicletas")
            );
        }

        public eliminar(motocicleta: Motocicleta){
            return this.http.doDelete<boolean>(
              `${environment.endpoint}/motocicleta/${motocicleta.id}`,
              this.http.optsName("eliminar motocicletas")
            );
        }
    
}