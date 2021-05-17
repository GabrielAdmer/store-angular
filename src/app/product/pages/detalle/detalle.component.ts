import { Component, OnInit } from '@angular/core';
import { Product } from '../../Interface/product.interface';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: [ './detalle.component.scss' ]
} )
export class DetalleComponent implements OnInit {

  product!: Product

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.productService.getProduct( id ) )
      )
      .subscribe( product => {
        this.product = product
      } )
  }

}
