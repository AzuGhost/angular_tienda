import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';

import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'productos', component: ProductoComponent},
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'productos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
