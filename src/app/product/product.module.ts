import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProdcutsComponent } from './pages/products/prodcuts.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';


@NgModule( {
  declarations: [
    ProdcutsComponent,
    DetalleComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,

    MaterialModule
  ]
} )
export class ProductModule { }
