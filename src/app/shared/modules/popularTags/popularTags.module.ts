import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { reducers } from './store/reducers';
import { PopularTagsKeys } from './shared/popularTags.key';
import { TagsModule } from '../tags/tags.module';
import { PopularTagsService } from './services/popularTags.service';
import { LoadingModule } from '../loading/loading.module';
import { GetPopularTagsEffect } from './store/effects/popularTags.effect';
import { PopularTagsComponent } from './components/popularTags/popularTags.component';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';

@NgModule({
    imports: [
        CommonModule,
        TagsModule,
        LoadingModule,
        ErrorMessageModule,
        EffectsModule.forFeature([GetPopularTagsEffect]),
        StoreModule.forFeature(PopularTagsKeys.PopularTags, reducers)
    ],
    declarations: [PopularTagsComponent],
    exports: [PopularTagsComponent],
    providers: [PopularTagsService]
})
export class PopularTagsModule { }