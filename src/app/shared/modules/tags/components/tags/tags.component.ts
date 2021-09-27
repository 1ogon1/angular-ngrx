import { Component, Input } from "@angular/core";

import { ArticleTagInterface } from "src/app/shared/types/article.interface";

@Component({
    selector: 'an-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
    @Input('tags') tagsProps: Array<ArticleTagInterface>
    @Input('outline') outlineProps: boolean = false
}