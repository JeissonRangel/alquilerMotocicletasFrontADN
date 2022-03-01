import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';

import { CrearAlquilerComponent } from './crear-alquiler.component';

describe('CrearAlquilerComponent',()=>{
    let component: CrearAlquilerComponent;
    let fixture: ComponentFixture<CrearAlquilerComponent>;

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations: [CrearAlquilerComponent],
            imports:[
                FormsModule,
                CommonModule,
                HttpClientModule,
                ReactiveFormsModule,
                RouterTestingModule
            ],
            providers: [AlquilerService, HttpService]
        })
        .compileComponents();
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(CrearAlquilerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Debe crearse el componente',()=>{
        expect(component).toBeTruthy();
    });

    it('Debe tener el boton de guardar deshabilitado si el estado del formulario es invalido',()=>{
        const botonGuardar = fixture.debugElement.nativeElement.querySelector('#guardar');
        expect(botonGuardar.disabled).toBeTrue();
    });

    it('Deberia crear un Alquiler',()=>{
        const spyRedirect = spyOn(component, 'onSubmit').and.callThrough();
        const botonGuardar = fixture.debugElement.nativeElement.querySelector('#guardar');
        botonGuardar.click();
        fixture.detectChanges();
        component.onSubmit();
        expect(spyRedirect).toHaveBeenCalled();
    });

    afterEach(()=>{
        fixture.destroy();
    });
});