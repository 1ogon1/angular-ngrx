import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { parseUrl, stringify } from 'query-string'
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

import { environment } from "src/environments/environment";
import { getFeedAction } from "../../store/actions/getFeed.action";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";
import { errorSelector, feedSelector, isLoadingSelector } from "../../store/selectors";

@Component({
    selector: 'an-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {
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

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes)
        // if (!changes.apiUrlProps?.firstChange && changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue) {
        //     this.fetchFeed()
        // }
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