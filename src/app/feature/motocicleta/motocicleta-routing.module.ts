import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MotocicletaComponent } from "@motocicleta/components/motocicleta/motocicleta.component";
import { CrearMotocicletaComponent } from "@motocicleta/components/crear-motocicleta/crear-motocicleta.component";
import { ListarMotocicletasComponent } from "@motocicleta/components/listar-motocicleta/listar-motocicleta.component";

const routes: Routes = [
    {
      path: "",
      component: MotocicletaComponent,
      children: [
        {
            path:"crear",
            component: CrearMotocicletaComponent,
        },
        {
            path:"listar",
            component: ListarMotocicletasComponent,
        }
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MotocicletaRoutingModule {}
  