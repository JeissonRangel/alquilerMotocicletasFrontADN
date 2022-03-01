import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { FacturaService } from '@factura/shared/service/factura.service';
import { Factura } from '@factura/shared/model/factura';

const ESPERA_GUARDADO = 500;
const REGISTRO_EXITOSO = 'La factura a sido creada exitosamente';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html'
})
export class CrearFacturaComponent implements OnInit{

    @Input()
    idAlquiler: number;

    constructor(protected facturaService: FacturaService, private router: Router){}

    ngOnInit(): void {
    }

    onClick() {
        let factura: Factura = new Factura(this.idAlquiler);
        this.facturaService
        .guardar(factura)
        .pipe(
            tap(() => this.router.navigate(['/'])),
            delay(ESPERA_GUARDADO)
        )
        .subscribe(
            () => {
            alert(REGISTRO_EXITOSO);
            },
            (error: HttpErrorResponse) => {
            alert(error.error.mensaje);
            }
        );
    }
    
}