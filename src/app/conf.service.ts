import { Injectable } from '@angular/core';
import { MeService } from './me.service';
import { User } from './models/user';

@Injectable()
export class ConfService {

  perPage: number = 50;
  scope_country_id: number=null;
  scope_sponsor_id: number=null;
  scope_agency_id: number=null;
  scope_product_id: number=null;
  constructor(private me: MeService) {
    this.scope_country_id=this.me.user.scope_country_id;
    this.scope_sponsor_id=this.me.user.scope_sponsor_id;
    this.scope_agency_id=this.me.user.scope_agency_id;
    this.scope_product_id=this.me.user.scope_product_id;
  }

}
