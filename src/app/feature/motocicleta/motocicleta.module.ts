import { NgModule } from '@angular/core';
import { MotocicletaRoutingModule } from '@motocicleta/motocicleta-routing.module';
import { MotocicletaComponent } from '@motocicleta/components/motocicleta/motocicleta.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MotocicletaComponent],
  imports: [
    MotocicletaRoutingModule,
    SharedModule
  ]
})
export class MotocicletaModule { }
