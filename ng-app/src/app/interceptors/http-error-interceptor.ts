import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorService } from '../services/http-error.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private httpErrorService: HttpErrorService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request)
            .pipe(
                catchError(err => {
                    const errMsg = '';
                    this.httpErrorService.showError(err);
                    return throwError('Invalid HTTP/Server Down');
                })
            );
    }
}
