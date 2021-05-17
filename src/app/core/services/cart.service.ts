import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../product/Interface/product.interface';

@Injectable( {
  providedIn: 'root'
} )
export class CartService {

  private product: Product[] = []
  private cart = new BehaviorSubject<Product[]>( [] )

  cart$ = this.cart.asObservable()

  constructor() { }

  addCart ( product: Product ) {
    this.product = [ ...this.product, product ]
    this.cart.next( this.product )
  }
}
