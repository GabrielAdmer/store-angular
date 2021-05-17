import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../product/Interface/product.interface';

export interface Pedido {
  id?: number;
  image: string;
  title: string;
  price: number;
  description: string,
  cart: number
}

@Pipe( {
  name: 'pedidos'
} )
export class PedidosPipe implements PipeTransform {

  pedido: Pedido[] = []

  transform ( products: Product[] ): Pedido[] {



    products.forEach( ( product ) => {
      //evaluamos is exite el id en uniquesProducts
      if ( !this.pedido.find( p => p.id === product.id ) ) {
        //si no existe llenamos el uniqueProducts con el nuevo producto y le ponemos su quantity en 1
        this.pedido.push( { ...product, cart: 1 } )
      } else {
        //si ya existe ese id solo recorremos this.uniqueProducts y aumentamos +1 en quantity
        for ( const i of this.pedido ) {
          if ( product.id === i.id ) {
            i.cart += 1
          }
        }
      }
    } );

    console.log( this.pedido );
    return this.pedido;
  }

}
