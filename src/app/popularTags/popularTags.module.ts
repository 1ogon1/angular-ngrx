import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { reducers } from './store/reducers';
import { PopularTagsKeys } from './shared/popularTags.key';
import { TagsModule } from '../shared/modules/tags/tags.module';
import { GetPopularTagsEffect } from './store/effects/popularTags.effect';
import { PopularTagsComponent } from './components/popularTags/popularTags.component';

@NgModule({
    imports: [
        CommonModule,
        TagsModule,
        EffectsModule.forFeature([GetPopularTagsEffect]),
        StoreModule.forFeature(PopularTagsKeys.PopularTags, reducers)
    ],
    declarations: [PopularTagsComponent],
    exports: [PopularTagsComponent]
})
export class PopularTagsModule { }