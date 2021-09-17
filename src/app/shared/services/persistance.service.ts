import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {
    set<T>(key: string, data: T): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (e) {
            console.error('Error saving to localStorege')
        }
    }

    get<T>(key: string): T {
        try {
            return JSON.parse(localStorage.getItem(key)) as T
        } catch (e) {
            console.error('Error getting data from localStorega');
            return null
        }
    }
}