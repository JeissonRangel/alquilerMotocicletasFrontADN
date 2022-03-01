import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';

import { BorrarAlquilerComponent } from '@alquiler/components/borrar-alquiler/borrar-alquiler.component'

describe('CrearAlquilerComponent',()=>{
    let component: BorrarAlquilerComponent;
    let fixture: ComponentFixture<BorrarAlquilerComponent>;

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations: [BorrarAlquilerComponent],
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
        fixture = TestBed.createComponent(BorrarAlquilerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Debe crearse el componente',()=>{
        expect(component).toBeTruthy();
    });
});