export interface Articleinterface {
    id: string
    slug: string
    title: string
    description: string
    createdAt: string
    favorites: number
    favorited: boolean
    tags: Array<ArticleTagInterface>
    author: ArticleAuthorInterface
}

export interface ArticleAuthorInterface {
    id: string
    image: string
    username: string
}

export interface ArticleTagInterface {
    id: string
    name: string
}