import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ArticleTagInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class PopularTagsService {
    constructor(private http: HttpClient) { }

    getPopularTags(): Observable<Array<ArticleTagInterface>> {
        return this.http.get<Array<ArticleTagInterface>>(`${environment.apiUrl}/tags`)
    }
}