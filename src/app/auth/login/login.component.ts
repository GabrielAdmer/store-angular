import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group( {
    email: [ , [ Validators.required ] ],
    password: [ , [ Validators.required ] ]
  } )

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit (): void {
  }

  login () {
    if ( this.miFormulario.invalid ) {
      return
    }
    this.authService.login( this.miFormulario.value.email, this.miFormulario.value.password )
      .then( () => this.router.navigateByUrl( "/admin/products" ) )
  }
}


