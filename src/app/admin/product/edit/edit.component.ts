import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component( {
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: [ './edit.component.scss' ]
} )
export class EditComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group( {
    id: [],
    title: [ , [ Validators.required ] ],
    image: [ , [ Validators.required ] ],
    price: [ , [ Validators.required ] ],
    description: [ , [ Validators.required ] ]
  } );

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit (): void {
    this.activeRoute.params
      .pipe(
        switchMap( ( { id } ) => this.productService.getProduct( id ) )
      )
      .subscribe( product => {
        console.log( product );
        this.miFormulario.reset( product )
      } )
  }

  isValid ( campo: string ) {
    return this.miFormulario.get( campo )?.errors
      && this.miFormulario.get( campo )?.touched
  }

  onSubmit (): void {
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched()
      return
    }
    this.productService.editProduct( this.miFormulario.value )
      .subscribe( resp => {
        this.router.navigateByUrl( "/admin/products" )
        this.openSnackBar( "Editado exitsamente" )
      } )
  }

  openSnackBar ( message: string ) {
    this._snackBar.open( message, "ok!", {
      duration: 3000
    } );
  }

}
