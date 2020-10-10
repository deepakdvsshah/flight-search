import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }

  login() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('grant_type', 'client_credentials');
    body = body.set('client_id', 'LZkyphaSlmUXlOby2SFleO4hZYBOAXlS');
    body = body.set('client_secret', 'SXjogKT83jGmA3jH');
    this.http.post<any>('https://test.api.amadeus.com/v1/security/oauth2/token', body, {
      headers: headers
    }).subscribe(data => {
      localStorage.setItem('token', data.access_token);
    });
  }
  public getToken(): string {
    const token = localStorage.getItem('token');
    return token
  }
}
