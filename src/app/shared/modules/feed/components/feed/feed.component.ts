import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getFeedAction } from "../../store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "../../store/selectors";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";

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

    constructor(private store: Store) { }

    ngOnInit(): void {
        // this.initializeValues()
        // this.fetchData()
    }

    private initializeValues(): void {
        this.feed$ = this.store.pipe(select(feedSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    }

    private fetchData(): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    }
}