import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { reducers } from "./store/reducers";
import { FeedKeys } from "./shared/feed.keys";
import { TagsModule } from "../tags/tags.module";
import { FeedService } from "./services/feed.service";
import { LoadingModule } from "../loading/loading.module";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { FeedComponent } from "./components/feed/feed.component";
import { PaginationModule } from "../pagination/pagination.module";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";

@NgModule({
    imports: [
        CommonModule, 
        EffectsModule.forFeature([GetFeedEffect]), 
        StoreModule.forFeature(FeedKeys.Feed, reducers),
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagsModule
    ],
    declarations: [FeedComponent],
    exports: [FeedComponent],
    providers: [FeedService]
})
export class FeedModule { }