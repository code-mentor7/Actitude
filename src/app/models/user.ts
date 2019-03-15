import { Role } from './role';

export class User {
  id?: number;
  email?: string;
  name?: string;
  username?: string;
  password?: string;
  roles?: Role[];
  ui_language?: string;
  scope_country_id?: number;
  scope_sponsor_id?: number;
  scope_agency_id?: number;
  scope_product_id?: number;
  updated_time?: string;
  created_time?: string;
}
