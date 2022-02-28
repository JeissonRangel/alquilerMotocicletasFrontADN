import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocicletaComponent } from './motocicleta.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MotocicletaComponent',()=>{
    let component: MotocicletaComponent;
    let fixture: ComponentFixture<MotocicletaComponent>;
    
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MotocicletaComponent ],
            imports: [
            CommonModule,
            HttpClientModule,
            RouterTestingModule
            ],
        })
        .compileComponents();
        }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MotocicletaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        });

    it('Should create',()=>{
        expect(component).toBeTruthy();
    });
});