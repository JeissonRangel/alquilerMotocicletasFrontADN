import { NgModule } from '@angular/core';
import { MotocicletaRoutingModule } from '@motocicleta/motocicleta-routing.module';
import { MotocicletaComponent } from '@motocicleta/components/motocicleta/motocicleta.component';
import { SharedModule } from '@shared/shared.module';
import { CrearMotocicletaComponent } from '@motocicleta/components/crear-motocicleta/crear-motocicleta.component';
import { MotocicletaService } from '@motocicleta/shared/service/motocicleta.service';
import { ListarMotocicletasComponent } from '@motocicleta/components/listar-motocicleta/listar-motocicleta.component';

@NgModule({
  declarations: [
    MotocicletaComponent,
    CrearMotocicletaComponent,
    ListarMotocicletasComponent
  ],
  imports: [
    MotocicletaRoutingModule,
    SharedModule
  ],
  providers: [MotocicletaService],
})
export class MotocicletaModule { }
