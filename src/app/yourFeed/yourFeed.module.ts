import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { YourFeedComponent } from './components/yourFeed/yourFeed.component';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';

const routes: Routes = [
    {
        path: 'feed',
        component: YourFeedComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule,
        RouterModule.forChild(routes)
    ],
    declarations: [YourFeedComponent]
})
export class YourFeedModule { }