import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AlquilerComponent } from '@alquiler/components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AlquilerService } from './shared/service/alquiler.service';

@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
  ],
  imports: [
    AlquilerRoutingModule,
    SharedModule
  ],
  providers: [AlquilerService],
})
export class AlquilerModule { }