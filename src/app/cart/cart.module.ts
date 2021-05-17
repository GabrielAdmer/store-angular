import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MaterialModule } from '../material/material.module';
import { PedidosPipe } from './pipe/pedidos.pipe';


@NgModule( {
  declarations: [
    PedidosComponent,
    PedidosPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ]
} )
export class CartModule { }
