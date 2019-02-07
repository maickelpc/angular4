import { Injectable } from '@angular/core'
// import { Http, Headers, RequestOptions} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs/Observable'
import { User } from './user.model'

import {COMMON_API} from '../../app.api'


@Injectable()
export class LoginService{

  constructor(private http:Http){
  }


  login(email: string, password: string): Observable<any>{

    let client_id: string = 'postman:post123';
    let grant_type: string = 'password';

    let headers = new Headers({
      'Content-Type':  'application/x-www-form-urlencoded'
    });

    const payload =   {
      username: email,
      password: password,
      grant_type: grant_type,
      client_id: client_id
    };





    const url: string = `${COMMON_API}/token`;

    return this.http.post( url, payload)

  }
}
