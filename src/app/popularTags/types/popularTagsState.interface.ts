import { ArticleTagInterface } from 'src/app/shared/types/article.interface';

export interface PopularTagsStateInterface {
    isLoading: boolean
    error: string | null
    data: Array<ArticleTagInterface> | null
}