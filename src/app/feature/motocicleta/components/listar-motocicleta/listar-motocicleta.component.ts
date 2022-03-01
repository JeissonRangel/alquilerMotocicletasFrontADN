import { Component, OnInit } from '@angular/core';
import { Motocicleta } from '@motocicleta/shared/model/motocicleta';
import { MotocicletaService } from '@motocicleta/shared/service/motocicleta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-motocicletas',
  templateUrl: './listar-motocicleta.component.html'
})
export class ListarMotocicletasComponent implements OnInit{
    public listaMotocicletas: Observable<Motocicleta[]>;

    constructor(protected motocicletaService: MotocicletaService){}

    ngOnInit() {
        this.listaMotocicletas = this.motocicletaService.consultar();
    }
}