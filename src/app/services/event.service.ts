import { GlobalConstants } from './../util/global-constants';
import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private refresh: BehaviorSubject<any> = new BehaviorSubject<any>(1);

    constructor() { }

    setLoader(show: boolean) {
        this.loader.next(show);
    }

    getLoader(): BehaviorSubject<boolean> {
        return this.loader;
    }

    setRefresh() {
        this.refresh.next('rfrsh');
    }

    getRefresh(): BehaviorSubject<any> {
        return this.refresh;
    }

}
