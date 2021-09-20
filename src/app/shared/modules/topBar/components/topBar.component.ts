import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";

import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { currentUserSelector, isAnonimousSelector, isLoggedInSelector } from "src/app/auth/store/selectors";

@Component({
    selector: 'an-topBar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit {
    isLoggedIn$: Observable<boolean>
    isAnonymous$: Observable<boolean>
    currentUser$: Observable<CurrentUserInterface | null>

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
        this.isAnonymous$ = this.store.pipe(select(isAnonimousSelector))
        this.currentUser$ = this.store.pipe(select(currentUserSelector))
    }
}