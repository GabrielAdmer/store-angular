import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { CartModule } from './cart/cart.module';
import { AdminGuard } from './core/guard/admin.guard';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "product",
        loadChildren: () => import( "./product/product.module" ).then( m => m.ProductModule )
      },
      {
        path: "home",
        loadChildren: () => import( "./home/home.module" ).then( m => m.HomeModule )
      },
      {
        path: "contacto",
        loadChildren: () => import( "./contacto/contacto.module" ).then( m => m.ContactoModule )
      },
      {
        path: "pedido",
        loadChildren: () => import( "./cart/cart.module" ).then( m => m.CartModule )
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "admin",
        canActivate: [ AdminGuard ],
        loadChildren: () => import( "./admin/admin.module" ).then( m => m.AdminModule ),

      },
    ]
  },
  {
    path: "auth",
    loadChildren: () => import( "./auth/auth.module" ).then( m => m.AuthModule )
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
