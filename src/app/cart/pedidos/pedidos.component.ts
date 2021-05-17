import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product/Interface/product.interface';
import { CartService } from '../../core/services/cart.service';

@Component( {
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: [ './pedidos.component.scss' ]
} )
export class PedidosComponent implements OnInit {
  displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol' ];

  isLinear = false;

  products$!: Observable<Product[]>

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit (): void {
    this.products$ = this.cartService.cart$
  }



}
