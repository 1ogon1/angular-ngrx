import { ArticleTagInterface } from 'src/app/shared/types/article.interface';

export interface GetPopularTagsResponseInterface {
    tags: Array<ArticleTagInterface> | null
}