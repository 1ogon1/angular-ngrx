import { GetFeedResponseInterface } from "./getFeedResponse.interface";

export interface FeedStateInteface {
    isLoading: boolean
    error: string | null
    data: GetFeedResponseInterface | null
}