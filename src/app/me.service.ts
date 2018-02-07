import { isString } from 'lodash';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MeService {
  user?: User = null;
  token?: string = null;

  constructor(private translate: TranslateService) { }

  setToken(token: string): void {
    this.token = token;
  }

  setUser(user: User): User {
    this.user = user;
    if (isString(this.user.ui_language)) {
      this.translate.use(this.user.ui_language);
    }
    return user;
  }

  forget(): void {
    this.user = null;
    this.token = null;
    let lang = 'en';
    if (isString(navigator.language)) {
      if (navigator.language.match(/es/)) {
        lang = 'es';
      };
    }
    this.translate.use(lang);
  }

}
