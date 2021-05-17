import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './product/products/products.component';
import { EditComponent } from './product/edit/edit.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "form",
        component: ProductFormComponent
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "edit/:id",
        component: EditComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "form"
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class AdminRoutingModule { }
