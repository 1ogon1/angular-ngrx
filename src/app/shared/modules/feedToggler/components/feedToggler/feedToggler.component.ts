import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
    selector: 'an-feed-toggler',
    templateUrl: './feedToggler.component.html',
    styleUrls: ['./feedToggler.component.scss']
})
export class feedTogglerComponent implements OnInit {
    @Input('tagName') tagNameProps: string | null
    
    isLoggedIn$: Observable<boolean>

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    }
}