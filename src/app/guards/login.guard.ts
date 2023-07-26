import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(
    // private authService: AuthService,
    // private toastrService: ToastrService,
    // private router: Router
    const canActivateTeam: CanActivateFn =(route:ActivatedRouteSnapshot, state:RouterStateSnapshot ) ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(["login"])
      this.toastrService.info("Sisteme Gİriş Yapmalısınız.")
      return false;
    }

  }

}
