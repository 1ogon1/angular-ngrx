import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { PopularTagsService } from '../../services/popularTags.service';
import { GetPopularTagsResponseInterface } from '../../types/getPopularTagsResponse.interface';
import { getPopularTagsAction, getPopularTagsFailrueAction, getPopularTagsSuccessAction } from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {
    constructor(
        private actions$: Actions,
        private popularTagsService: PopularTagsService
    ) { }

    getPopularTags$ = createEffect(() => this.actions$.pipe(
        ofType(getPopularTagsAction),
        switchMap(() => {
            return this.popularTagsService.getPopularTags().pipe(
                map((popularTags: GetPopularTagsResponseInterface) => {
                    return getPopularTagsSuccessAction({ popularTags })
                }),
                catchError(() => {
                    return of(getPopularTagsFailrueAction())
                })
            )
        })
    ))
}