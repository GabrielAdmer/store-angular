import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './product/products/products.component';
import { MaterialModule } from '../material/material.module';
import { EditComponent } from './product/edit/edit.component';
import { DialogConfimComponent } from './components/dialog-confim/dialog-confim.component';




@NgModule( {
  declarations: [ ProductFormComponent, LayoutComponent, ProductsComponent, EditComponent, DialogConfimComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,

  ]
} )
export class AdminModule { }
