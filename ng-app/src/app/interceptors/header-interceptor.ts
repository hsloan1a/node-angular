import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const newRequest = request.clone( {
            setHeaders: {
              'Content-Type':  'application/json'
            }
        });
        return next.handle(newRequest);
    }
}
