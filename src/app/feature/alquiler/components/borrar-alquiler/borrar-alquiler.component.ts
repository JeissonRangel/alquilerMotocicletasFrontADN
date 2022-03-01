import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';

const ESPERA_GUARDADO = 500;
const REGISTRO_EXITOSO = 'Este alquiler ah sido eliminado exitosamente';

@Component({
  selector: 'app-borrar-alquiler',
  templateUrl: './borrar-alquiler.component.html'
})
export class BorrarAlquilerComponent implements OnInit{

    @Input()
    idAlquiler: number;

    constructor(protected alquilerService: AlquilerService, private router: Router){}

    ngOnInit(): void {
    }

    onClick() {
        if(confirm("¿Seguro que deseas eliminar este alquiler?")){
            this.alquilerService
            .eliminar(this.idAlquiler)
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

}