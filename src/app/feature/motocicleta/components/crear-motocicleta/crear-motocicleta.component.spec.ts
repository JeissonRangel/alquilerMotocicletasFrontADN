import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { MotocicletaService } from '@motocicleta/shared/service/motocicleta.service';

import { CrearMotocicletaComponent } from './crear-motocicleta.component';

describe('CrearMotocicletaComponent',()=>{
    let component: CrearMotocicletaComponent;
    let fixture: ComponentFixture<CrearMotocicletaComponent>;

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations: [CrearMotocicletaComponent],
            imports:[
                FormsModule,
                CommonModule,
                HttpClientModule,
                ReactiveFormsModule,
                RouterTestingModule
            ],
            providers: [MotocicletaService, HttpService]
        })
        .compileComponents();
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(CrearMotocicletaComponent);
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

    it('Deberia crear Motocicleta',()=>{
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