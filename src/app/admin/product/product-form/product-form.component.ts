import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component( {
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: [ './product-form.component.scss' ]
} )
export class ProductFormComponent {
  miFormulario: FormGroup = this.fb.group( {
    id: [],
    title: [ , [ Validators.required ] ],
    image: [ , [ Validators.required ] ],
    price: [ , [ Validators.required ] ],
    description: [ , [ Validators.required ] ]
  } );

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  isValid ( campo: string ) {
    return this.miFormulario.get( campo )?.errors
      || this.miFormulario.get( campo )?.touched
  }

  onSubmit (): void {
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched()
      return
    }
    this.productService.createProduct( this.miFormulario.value )
      .subscribe( () => {
        this.router.navigateByUrl( "/admin/products" )
        this.openSnackBar( "Se creo exitosamente" )
      } )
  }

  openSnackBar ( message: string ) {
    this._snackBar.open( message, "ok!", {
      duration: 3000
    } );
  }

}
