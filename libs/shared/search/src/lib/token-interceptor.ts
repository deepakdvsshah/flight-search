import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { FlightSearchState } from './+state/search.state';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private store: Store,) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.includes("token", 0)) {
            const token = this.store.selectSnapshot(FlightSearchState.getToken);
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}