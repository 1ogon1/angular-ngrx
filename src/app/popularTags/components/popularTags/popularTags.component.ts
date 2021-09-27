import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { ArticleTagInterface } from 'src/app/shared/types/article.interface';
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import { Observable } from 'rxjs';

@Component({
    selector: 'an-popular-tags',
    templateUrl: './popularTags.component.html',
    styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit {
    tags$: Observable<Array<ArticleTagInterface>>

    constructor(private store: Store) { }

    ngOnInit(): void {
    }
}