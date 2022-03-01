import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquilerComponent } from '@alquiler/components/alquiler/alquiler.component';
import { CrearAlquilerComponent } from '@alquiler/components/crear-alquiler/crear-alquiler.component';

const routes: Routes = [
    {
      path: "",
      component: AlquilerComponent,
      children: [
        {
            path: "crear",
            component: CrearAlquilerComponent
        }
      ],
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlquilerRoutingModule { }
  