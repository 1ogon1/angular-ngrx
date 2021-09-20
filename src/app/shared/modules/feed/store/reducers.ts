import { Action, createReducer, on } from "@ngrx/store";

import { FeedStateInteface } from "../types/feedState.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/getFeed.action";

const initialState: FeedStateInteface = {
    data: null,
    error: null,
    isLoading: false
}

const feedReducer = createReducer(
    initialState,

    on(getFeedAction, (state): FeedStateInteface => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(getFeedSuccessAction, (state, action): FeedStateInteface => ({
        ...state,
        isLoading: false,
        data: action.feed
    })),

    on(getFeedFailureAction, (state): FeedStateInteface => ({
        ...state,
        isLoading: false,
    }))
)

export function reducers(state: FeedStateInteface, action: Action) {
    return feedReducer(state, action)
}