import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
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

        return this.authService.userIsAuthenticated.pipe(take(1),
        switchMap(isAuthenticated => {
          if (!isAuthenticated) {
            return this.authService.autoLogin();
          } else {
            return of (isAuthenticated);
          }
        }),
         tap(
          isAuthenticated => {
            if (!isAuthenticated) {
              this.router.navigateByUrl('login');
            }
          }
        ));
  }

}
