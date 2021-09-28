import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';

@Injectable()
export class PopularTagsService {
    constructor(private http: HttpClient) { }

    getPopularTags(): Observable<GetPopularTagsResponseInterface> {
        return this.http.get<GetPopularTagsResponseInterface>(`${environment.apiUrl}/tag`)
    }
}