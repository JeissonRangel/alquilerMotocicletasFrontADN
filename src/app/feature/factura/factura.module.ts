import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FacturaRoutingModule } from './factura-routing.module';
import { FacturaService } from './shared/service/factura.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacturaComponent } from './components/factura/factura.component';
import { ListarFacturaComponent } from './components/listar-factura/listar-factura.component';

@NgModule({
  declarations: [
    FacturaComponent,
    ListarFacturaComponent
  ],
  imports: [
    FacturaRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [FacturaService],
})
export class FacturaModule { }
