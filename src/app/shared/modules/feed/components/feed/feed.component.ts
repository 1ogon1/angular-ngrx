import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { parseUrl, stringify } from 'query-string'
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { environment } from "src/environments/environment";
import { getFeedAction } from "../../store/actions/getFeed.action";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "../../store/selectors";

@Component({
    selector: 'an-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    @Input('apiUrl') apiUrlProps: string

    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<GetFeedResponseInterface | null>

    baseUrl: string
    currentPage: number
    limit = environment.limit

    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
    }

    toDate(date: string): string {
        if (date) {
            return new Date(date).toLocaleString()
        }

        return null
    }

    private initializeValues(): void {
        this.baseUrl = this.router.url.split('?')[0]

        this.feed$ = this.store.pipe(select(feedSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    }

    private fetchFeed(): void {
        const url = parseUrl(this.apiUrlProps)
        const params = stringify({
            ...url.query,
            page: this.currentPage
        })
        
        this.store.dispatch(getFeedAction({ url: `${url.url}?${params}` }))
    }

    private initializeListeners(): void {
        this.route.queryParams.subscribe((params: Params) => {
            this.currentPage = Number(params.page || '1')

            this.fetchFeed()
        })
    }
}