import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class LoggedInAuthGuard implements CanActivate {
  currentUser: any;
    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        if (this.currentUser) {
            this.router.navigate(['/dashboard']);
            return false;
        } else {
            return true;
        }
    }
}
