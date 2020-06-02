import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenService: AuthenService
  ) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenService.currentUserValue;
    if(currentUser) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
