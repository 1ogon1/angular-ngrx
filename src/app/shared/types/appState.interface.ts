import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { PopularTagsStateInterface } from 'src/app/popularTags/types/popularTagsState.interface';
import { FeedStateInteface } from "../modules/feed/types/feedState.interface";

export interface AppStateInterface {
    auth: AuthStateInterface,
    feed: FeedStateInteface,
    popularTags: PopularTagsStateInterface
}