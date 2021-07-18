import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthserviceService, private router: Router) {

  }

  canLoad(route: Route,
     segments: UrlSegment[]):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.authService.userIsAuthenticated) {
          this.router.navigateByUrl('login');
        }
        return this.authService.userIsAuthenticated;
  }

}
