import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MotocicletaComponent } from "@motocicleta/components/motocicleta/motocicleta.component";

const routes: Routes = [
    {
      path: "",
      component: MotocicletaComponent,
      children: [
        
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MotocicletaRoutingModule {}
  