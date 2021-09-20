import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";

import { reducers } from "./store/reducers";
import { FeedKeys } from "./shared/feed.keys";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { FeedComponent } from "./components/feed/feed.component";
import { FeedService } from "./services/feed.service";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule, 
        EffectsModule.forFeature([GetFeedEffect]), 
        StoreModule.forFeature(FeedKeys.Feed, reducers),
        RouterModule
    ],
    declarations: [FeedComponent],
    exports: [FeedComponent],
    providers: [FeedService]
})
export class FeedModule { }