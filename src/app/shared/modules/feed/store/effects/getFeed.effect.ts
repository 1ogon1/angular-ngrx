import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { FeedService } from "../../services/feed.service";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action";
import { Injectable } from "@angular/core";

@Injectable()
export class GetFeedEffect {
    constructor(
        private actions$: Actions,
        private feedService: FeedService
    ) { }

    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({ url }) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: GetFeedResponseInterface) => {
                    return getFeedSuccessAction({ feed })
                }),
                catchError(() => {
                    return of(getFeedFailureAction())
                })
            )
        })
    ))
}