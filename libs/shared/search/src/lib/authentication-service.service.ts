import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }

  login() {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const body = { grant_type: 'client_credentials', client_id: 'LZkyphaSlmUXlOby2SFleO4hZYBOAXlS', client_secret: 'SXjogKT83jGmA3jH' };
    this.http.post<any>('https://test.api.amadeus.com/v1/security/oauth2/token', body, { headers }).subscribe(data => {
      console.log('data' + data);
    });
  }
  public getToken(): string {
    const token = localStorage.getItem('token') || 'OkPkQbL5Nb1BxstYt2x2la8GaO3g';
    return token
  }
}
