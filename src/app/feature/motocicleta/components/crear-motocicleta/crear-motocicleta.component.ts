import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MotocicletaService } from "@motocicleta/shared/service/motocicleta.service";


const LONGITUD_MINIMA_PERMITIDA_TEXTO = 5;
const REGISTRO_EXITOSO = "La motocicleta a sido registrada con exito";

@Component({
    selector: 'app-crear-motocicleta',
    templateUrl: './crear-motocicleta.component.html'
})
export class CrearMotocicletaComponent implements OnInit {
    
    motocicletaForm: FormGroup;
    constructor(protected motocicletaServices: MotocicletaService){}
    
    ngOnInit() {
        this.construirFormularioMotocicleta();
    }

    onSubmit() {
        this.motocicletaServices.guardar(this.motocicletaForm.value).subscribe(
            () => {
              alert(REGISTRO_EXITOSO);
            },
            (error: HttpErrorResponse) => {
              alert(error.error.mensaje);
            }
          );;
    }

    private construirFormularioMotocicleta() {
        this.motocicletaForm = new FormGroup({
            nombre: new FormControl('',[Validators.required,Validators.min(LONGITUD_MINIMA_PERMITIDA_TEXTO)]),
            valorMotocicleta: new FormControl('',[Validators.required]),
            anioModelo: new FormControl('',[Validators.required])
        });
    }
}