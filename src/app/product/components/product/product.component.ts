import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../Interface/product.interface';
import { CartService } from '../../../core/services/cart.service';


@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
} )
export class ProductComponent implements OnInit {

  @Input() product!: Product
  @Output() onCart: EventEmitter<number> = new EventEmitter()

  constructor(
    private cartService: CartService
  ) {

  }

  ngOnInit (): void {

  }

  // ngOnChanges ( changes: SimpleChanges ): void {
  //   console.log( "onchanges" );
  //   console.log( changes );
  // }

  addCart ( index: number ) {
    this.onCart.emit( index )
  }

  add () {
    this.cartService.addCart( this.product )
  }


}
