import { Articleinterface } from "src/app/shared/types/article.interface";

export interface GetFeedResponseInterface {
    articles: Array<Articleinterface>
    articlesCount: number
}