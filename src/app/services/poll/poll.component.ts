import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from "rxjs/internal/observable/interval";
import { PollInterface } from './poll.interface';

@Injectable({providedIn: 'root'})
export class PollService implements OnDestroy{

    subscription: Subscription;

    create(milliseconds: number, pollInterface : PollInterface) {
        this.subscription = interval(milliseconds).subscribe(res => pollInterface.pollAction());
    }

    stop() {
        this.subscription.unsubscribe();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}