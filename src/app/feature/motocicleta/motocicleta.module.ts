import { NgModule } from '@angular/core';
import { MotocicletaRoutingModule } from '@motocicleta/motocicleta-routing.module';
import { MotocicletaComponent } from '@motocicleta/components/motocicleta/motocicleta.component';
import { SharedModule } from '@shared/shared.module';
import { CrearMotocicletaComponent } from './components/crear-motocicleta/crear-motocicleta.component';
import { MotocicletaService } from './shared/service/motocicleta.service';

@NgModule({
  declarations: [
    MotocicletaComponent,
    CrearMotocicletaComponent
  ],
  imports: [
    MotocicletaRoutingModule,
    SharedModule
  ],
  providers: [MotocicletaService],
})
export class MotocicletaModule { }
