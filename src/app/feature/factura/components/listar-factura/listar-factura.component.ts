import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '@factura/shared/model/factura';
import { FacturaService } from '@factura/shared/service/factura.service';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html'
})
export class ListarFacturaComponent implements OnInit{

    public listaFacturas: Observable<Factura[]>;

    constructor(protected facturaService: FacturaService){}

    ngOnInit() {
        this.listaFacturas = this.facturaService.consultar();
    }
    
}