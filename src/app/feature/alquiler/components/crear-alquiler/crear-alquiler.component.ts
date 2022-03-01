import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';

const ESPERA_GUARDADO = 500;
const REGISTRO_EXITOSO = 'El alquiler a sido registrado exitosamente';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html'
})
export class CrearAlquilerComponent implements OnInit{

    alquilerForm: FormGroup;

    constructor(protected alquilerService: AlquilerService, private router: Router){}

    ngOnInit(): void {
        this.construirFormularioMotocicleta();
    }

    onSubmit() {
        this.alquilerService
        .guardar(this.alquilerForm.value)
        .pipe(
            tap(() => this.router.navigate(['alquiler'])),
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

    private construirFormularioMotocicleta() {
        this.alquilerForm = new FormGroup({
            personaId: new FormControl('',[Validators.required]),
            cantidadDiasAlquiler: new FormControl('',[Validators.required]),
            planeaSalirDeLaCiudad: new FormControl(false),
            planeaLlevarParrillero: new FormControl(false)
        });
    }
}