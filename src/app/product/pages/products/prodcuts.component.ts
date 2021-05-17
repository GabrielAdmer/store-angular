import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../Interface/product.interface';

@Component( {
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: [ './prodcuts.component.scss' ]
} )
export class ProdcutsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit (): void {
    this.getProducts()
  }

  getProducts () {
    this.productService.getProducts()
      .subscribe( products => {
        this.products = products
      } )
  }

  addCart ( index: number ) {
    console.log( index );
  }

}
