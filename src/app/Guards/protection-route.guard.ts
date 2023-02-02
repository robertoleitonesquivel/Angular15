import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityPathService } from '@Services/security-path.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectionRouteGuard implements CanActivate {


  constructor(private securitySVC: SecurityPathService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.securitySVC.hasPermissions(state.url);
  }

}
