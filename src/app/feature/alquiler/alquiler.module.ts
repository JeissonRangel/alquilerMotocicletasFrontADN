import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AlquilerComponent } from '@alquiler/components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AlquilerService } from './shared/service/alquiler.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { BorrarAlquilerComponent } from './components/borrar-alquiler/borrar-alquiler.component';

@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent,
    BorrarAlquilerComponent
  ],
  imports: [
    AlquilerRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [AlquilerService],
})
export class AlquilerModule { }
