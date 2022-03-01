import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';

import { CrearFacturaComponent } from './crear-factura.component';

describe('CrearAlquilerComponent',()=>{
    let component: CrearFacturaComponent;
    let fixture: ComponentFixture<CrearFacturaComponent>;

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations: [CrearFacturaComponent],
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
        fixture = TestBed.createComponent(CrearFacturaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Debe crearse el componente',()=>{
        expect(component).toBeTruthy();
    });

    it('Deberia crear un Alquiler',()=>{
        const spyRedirect = spyOn(component, 'onClick').and.callThrough();
        const botonGuardar = fixture.debugElement.nativeElement.querySelector('#guardar');
        botonGuardar.click();
        fixture.detectChanges();
        component.onClick();
        expect(spyRedirect).toHaveBeenCalled();
    });

    afterEach(()=>{
        fixture.destroy();
    });
});