import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/Interface/product.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {

  private baseUrl: string = "http://localhost:3000/products"
  //private baseUrl: string = "https://platzi-store.herokuapp.com/products"


  constructor(
    private http: HttpClient
  ) { }

  getProducts () {
    return this.http.get<Product[]>( this.baseUrl )
  }

  getProduct ( id: number ) {
    return this.http.get<Product>( `${this.baseUrl}/${id}` )
  }

  createProduct ( product: Product ) {
    return this.http.post<Product>( `${this.baseUrl}`, product )
  }

  editProduct ( product: Product ) {
    return this.http.put<Product>( `${this.baseUrl}/${product.id}`, product )
  }

  deleteProduct ( id: number ) {
    return this.http.delete<Product>( `${this.baseUrl}/${id}` )
  }
}
