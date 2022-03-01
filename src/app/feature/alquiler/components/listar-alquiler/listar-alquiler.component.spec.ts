import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Alquiler } from '@alquiler/shared/model/alquiler';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { ListarAlquilerComponent } from './listar-alquiler.component';
import { of } from 'rxjs';

describe('ListarAlquilerComponent',()=>{
    let component: ListarAlquilerComponent;
    let fixture: ComponentFixture<ListarAlquilerComponent>;

    let alquilerServiceMock: Partial<AlquilerService>;
    let dumyAlquileres: Alquiler[] = [
        new Alquiler(1, 1, 1, 20, true,true),
        new Alquiler(2, 2, 2, 20, false,false)
    ];

    alquilerServiceMock = {
        consultar: ()=>{
            return of(dumyAlquileres);
        }
    };

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            declarations: [ListarAlquilerComponent],
            imports: [
                CommonModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [{provide: AlquilerService, HttpService, useValue: alquilerServiceMock}]
        })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ListarAlquilerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Debe crearse el componente', () => {
        expect(component).toBeTruthy();
      });
    
      it('Debe listar los alquileres registrados', () => {
        component.ngOnInit();
    
        component.listaAlquileres.subscribe(respuesta => {
          expect(respuesta).toEqual(dumyAlquileres);
        })
      });
    
      it('Debe mostrar alerta si no hay alquileres registrados', () => {
        dumyAlquileres = [];
        component.ngOnInit();
        fixture.detectChanges();
        const MSG = fixture.nativeElement.querySelector('#vacio');
        expect(MSG.innerText).toEqual('Aun no se a creado ningun alquiler en el sistema');
    });
});