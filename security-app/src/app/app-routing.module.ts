import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './private/clientes/clientes.component';
import { ClienteFormComponent } from './private/cliente-form/cliente-form.component'; // form cliente
import { FacturaFormComponent } from './private/factura-form/factura-form.component'; // form factura
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { FacturasComponent } from './private/facturas/facturas.component';
import { ProductosComponent } from './private/productos/productos.component';
import { ProductosFacturasComponent } from './private/productos-facturas/productos-facturas.component';
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
  {path: 'clientes/add', component: ClienteFormComponent, canActivate: [AuthGuard]}, // redirecciona
  {path: 'clientes/:id', component: ClienteFormComponent, canActivate: [AuthGuard]}, // id redirecciona
  {path: 'facturas/add', component: FacturaFormComponent, canActivate: [AuthGuard]}, // redirecciona
  {path: 'facturas/:id', component: FacturaFormComponent, canActivate: [AuthGuard]}, // id redirecciona
  {path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard]},
  {path: 'facturas', component: FacturasComponent, canActivate: [AuthGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [AuthGuard]},
  {path: 'productos-facturas', component: ProductosFacturasComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
