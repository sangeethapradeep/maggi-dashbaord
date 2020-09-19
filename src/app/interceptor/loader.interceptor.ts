import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventService } from '../services/event.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    private skipUrls = [
    ];

    private requests: HttpRequest<any>[] = [];

    constructor(private events: EventService) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        setTimeout(() => { this.events.setLoader(this.requests.length > 0); }, 500);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.skipUrls.some(_ => req.url.indexOf(_) !== -1)) {
            return next.handle(req);
        }

        this.requests.push(req);
        Promise.resolve(null).then(() => this.events.setLoader(true));

        return next.handle(req).pipe(
            finalize(() => this.removeRequest(req))
        );
    }

}
