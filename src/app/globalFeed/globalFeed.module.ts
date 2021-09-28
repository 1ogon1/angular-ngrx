import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalFeedComponent
    }
]

@NgModule({
    imports: [
        CommonModule, 
        FeedModule, 
        BannerModule, 
        PopularTagsModule,
        FeedTogglerModule,
        RouterModule.forChild(routes), 
    ],
    declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule { }