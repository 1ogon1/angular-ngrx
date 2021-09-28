import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'an-tag-feed',
    templateUrl: './tagFeed.component.html',
    styleUrls: ['./tagFeed.component.scss']
})
export class TagFeedComponent implements OnInit {
    apiUrl: string
    tagName: string

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.tagName = this.route.snapshot.paramMap.get('slug')
        this.apiUrl += `/article?tag=${this.tagName}`

        // this.route.params.subscribe((params: Params) => {
        //     this.tagName = this.route.snapshot.paramMap.get('slug')
        //     this.apiUrl += `/article?tag=${this.tagName}`
        // })
    }
}