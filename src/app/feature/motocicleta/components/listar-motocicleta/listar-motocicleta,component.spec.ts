import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Motocicleta } from '@motocicleta/shared/model/motocicleta';
import { MotocicletaService } from '@motocicleta/shared/service/motocicleta.service';
import { of } from 'rxjs';

import { ListarMotocicletasComponent } from './listar-motocicleta.component';

describe('ListarMotocicletaComponent',()=>{
    let component: ListarMotocicletasComponent;
    let fixture: ComponentFixture<ListarMotocicletasComponent>;

    let motocicletaServiceStub: Partial<MotocicletaService>;
    let dumyMotocicletas: Motocicleta[] = [
        new Motocicleta(1, "R1", 1000, 2020, true),
        new Motocicleta(2, "R1M", 10000, 2020, true)
    ];

    motocicletaServiceStub = {
        consultar: ()=>{
            return of(dumyMotocicletas);
        }
    };

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            declarations: [ListarMotocicletasComponent],
            imports: [
                CommonModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [{provide: MotocicletaService, HttpService, useValue: motocicletaServiceStub}]
        })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ListarMotocicletasComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Debe crearse el componente', () => {
        expect(component).toBeTruthy();
      });
    
      it('Debe listar las motocicletas registradas', () => {
        component.ngOnInit();
    
        component.listaMotocicletas.subscribe(respuesta => {
          expect(respuesta).toEqual(dumyMotocicletas);
        })
      });
    
      it('Debe mostrar alerta sin motocicletas registradas', () => {
        dumyMotocicletas = [];
        component.ngOnInit();
        fixture.detectChanges();
        const MSG = fixture.nativeElement.querySelector('#vacio');
        expect(MSG.innerText).toEqual('Aun no se a creado ninguna motocicleta en el sistema');
    });
});