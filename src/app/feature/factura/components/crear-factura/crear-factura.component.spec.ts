import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';

import { CrearFacturaComponent } from './crear-factura.component';
import { FacturaService } from '@factura/shared/service/factura.service';

describe('CrearFacturaComponent',()=>{
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
            providers: [FacturaService, HttpService]
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

    it('Deberia crear una factura',()=>{
        const spyRedirect = spyOn(component, 'onClick').and.callThrough();
        const botonFacturar = fixture.debugElement.nativeElement.querySelector('#facturar');
        botonFacturar.click();
        fixture.detectChanges();
        component.onClick();
        expect(spyRedirect).toHaveBeenCalled();
    });

    afterEach(()=>{
        fixture.destroy();
    });
});