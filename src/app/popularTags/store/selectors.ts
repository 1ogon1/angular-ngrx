import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PopularTagsKeys } from '../shared/popularTags.key';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';

export const popularTagsFeautureSelector = createFeatureSelector<AppStateInterface, PopularTagsStateInterface>(PopularTagsKeys.PopularTags)

export const isLoadingSelector = createSelector(
    popularTagsFeautureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
)

export const errorSelector = createSelector(
    popularTagsFeautureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
)

export const popularTagsSelector = createSelector(
    popularTagsFeautureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
)