import { Component, OnInit } from '@angular/core';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { Observable } from 'rxjs';
import { Alquiler } from '@alquiler/shared/model/alquiler';

@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html'
})
export class ListarAlquilerComponent implements OnInit{

    public listaAlquileres: Observable<Alquiler[]>

    constructor(protected alquilerService: AlquilerService){}

    ngOnInit() {
        this.listaAlquileres = this.alquilerService.consultar();
    }
    
}