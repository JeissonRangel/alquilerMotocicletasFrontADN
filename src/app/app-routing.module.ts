import { CrearAlquilerComponent } from '@alquiler/components/crear-alquiler/crear-alquiler.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { CrearMotocicletaComponent } from '@motocicleta/components/crear-motocicleta/crear-motocicleta.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'motocicleta', loadChildren: () => import('@motocicleta/motocicleta.module').then(mod => mod.MotocicletaModule)},
  { path: 'crear-motocicleta', component: CrearMotocicletaComponent },
  { path: 'alquiler', loadChildren: ()=> import('@alquiler/alquiler.module').then(mod => mod.AlquilerModule)},
  { path: 'crear-alquiler', component: CrearAlquilerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
