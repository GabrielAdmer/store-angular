import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdcutsComponent } from './pages/products/prodcuts.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "products",
        component: ProdcutsComponent
      },
      {
        path: ":id",
        component: DetalleComponent
      },
      {
        path: "**",
        redirectTo: "products"
      }
    ]
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class ProductRoutingModule { }
