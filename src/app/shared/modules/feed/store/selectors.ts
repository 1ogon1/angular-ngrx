import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { FeedKeys } from "../shared/feed.keys";
import { FeedStateInteface } from "../types/feedState.interface";

export const feedFeautureSelector = createFeatureSelector<AppStateInterface, FeedStateInteface>(FeedKeys.Feed)

export const isLoadingSelector = createSelector(
    feedFeautureSelector,
    (feedState: FeedStateInteface) => feedState.isLoading
)

export const errorSelector = createSelector(
    feedFeautureSelector,
    (feedState: FeedStateInteface) => feedState.error
)

export const feedSelector = createSelector(
    feedFeautureSelector,
    (feedState: FeedStateInteface) => feedState.data
)