import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Role } from '../../models/role';
import { ApiService } from '../../api/api.service';

@Injectable()
export class RolesGuardService {

  roles: Role[] = [];

  constructor(private api: ApiService) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    // return this.api.roles.get().promise()
    //   .then(roles => this.roles = roles.data)
    //   .then(() => true)
    //   .catch(() => false)
    //   ;
  // }

}
