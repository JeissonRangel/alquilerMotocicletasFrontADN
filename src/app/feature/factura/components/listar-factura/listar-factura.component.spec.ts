import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Factura } from '@factura/shared/model/factura';
import { FacturaService } from '@factura/shared/service/factura.service';
import { ListarFacturaComponent } from './listar-factura.component';
import { of } from 'rxjs';

describe('ListarAlquilerComponent',()=>{
    let component: ListarFacturaComponent;
    let fixture: ComponentFixture<ListarFacturaComponent>;

    let facturaServiceMock: Partial<FacturaService>;
    let dummyFacturas: Factura[] = [
        new Factura(1),
        new Factura(2)
    ];

    facturaServiceMock = {
        consultar: ()=>{
            return of(dummyFacturas);
        }
    };

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            declarations: [ListarFacturaComponent],
            imports: [
                CommonModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [{provide: FacturaService, HttpService, useValue: facturaServiceMock}]
        })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ListarFacturaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Debe crearse el componente', () => {
        expect(component).toBeTruthy();
      });
    
      it('Debe listar las facturas registradas', () => {
        component.ngOnInit();
    
        component.listaFacturas.subscribe(respuesta => {
          expect(respuesta).toEqual(dummyFacturas);
        })
      });
    
      it('Debe mostrar alerta si no hay alquileres registrados', () => {
        dummyFacturas = [];
        component.ngOnInit();
        fixture.detectChanges();
        const MSG = fixture.nativeElement.querySelector('#vacio');
        expect(MSG.innerText).toEqual('Aun no se a creado ninguna factura en el sistema');
    });
});