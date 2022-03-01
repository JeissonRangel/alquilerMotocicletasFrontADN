import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AlquilerComponent } from '@alquiler/components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from '@alquiler/components/crear-alquiler/crear-alquiler.component';
import { CrearFacturaComponent } from '@factura/components/crear-factura/crear-factura.component';
import { AlquilerRoutingModule } from '@alquiler/alquiler-routing.module';
import { AlquilerService } from '@alquiler/shared/service/alquiler.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarAlquilerComponent } from '@alquiler/components/listar-alquiler/listar-alquiler.component';
import { BorrarAlquilerComponent } from '@alquiler/components/borrar-alquiler/borrar-alquiler.component';

@NgModule({
  declarations: [
    AlquilerComponent,
    CrearAlquilerComponent,
    ListarAlquilerComponent,
    BorrarAlquilerComponent,
    CrearFacturaComponent
  ],
  imports: [
    AlquilerRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [AlquilerService],
})
export class AlquilerModule {}
