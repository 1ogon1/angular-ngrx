import { ProfileInterface } from "./profile.interface";

export interface Articleinterface {
    author: ProfileInterface
    title: string
    description: string
    body: string
    favorited: boolean
    favoritesCount: number
    slug: string
    tagList: Array<string>
    createdAt: string
    updatedAt: string
}