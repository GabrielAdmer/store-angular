import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';


@Injectable( {
  providedIn: 'root'
} )
export class AdminGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService
  ) { }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.hasUser().pipe(
      map( user => user === null ? false : true )
    )


    return true;
  }
  canLoad (
    route: Route,
    segments: UrlSegment[] ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
