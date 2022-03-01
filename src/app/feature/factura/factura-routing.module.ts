import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from './components/factura/factura.component';
import { ListarFacturaComponent } from './components/listar-factura/listar-factura.component';

const routes: Routes = [
    {
      path: "",
      component: FacturaComponent,
      children: [
        {
            path: "listar",
            component: ListarFacturaComponent
        },
      ],
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FacturaRoutingModule { }
  