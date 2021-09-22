import { Component } from "@angular/core";

@Component({
    selector: 'an-global-feed',
    templateUrl: './globalFeed.component.html',
    styleUrls: ['./globalFeed.component.scss']
})
export class GlobalFeedComponent {
    apiUrl: string = '/article'
}