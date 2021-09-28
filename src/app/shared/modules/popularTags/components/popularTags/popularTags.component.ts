import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { ArticleTagInterface } from 'src/app/shared/types/article.interface';
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import { errorSelector, isLoadingSelector, popularTagsSelector } from '../../store/selectors';

@Component({
    selector: 'an-popular-tags',
    templateUrl: './popularTags.component.html',
    styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit {
    error$: Observable<string>
    isLoading$: Observable<boolean>
    tags$: Observable<Array<ArticleTagInterface>> | null

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.error$ = this.store.pipe(select(errorSelector))
        this.tags$ = this.store.pipe(select(popularTagsSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))

        this.store.dispatch(getPopularTagsAction())
    }
}