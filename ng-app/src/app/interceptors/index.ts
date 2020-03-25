import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { HttpErrorInterceptor } from './http-error-interceptor';


export const httpInterceptProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
