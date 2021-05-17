import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
} )
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group( {
    name: [ , [ Validators.required ] ],
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

  registro () {
    if ( this.miFormulario.invalid ) {
      return
    }
    this.authService.createUser( this.miFormulario.value.email, this.miFormulario.value.password )
      .then( () => this.router.navigateByUrl( "/auth/login" ) )
  }

}
