import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "src/app/shared/services/utils.service";

@Component({
    selector: 'an-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input('url') urlProps: string
    @Input('total') totalProps: number
    @Input('limit') limitProps: number
    @Input('currentPage') currentPageProps: number

    pages: Array<number>
    pagesCount: number

    constructor(private utilsService: UtilsService) { }

    ngOnInit(): void { 
        this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
        this.pages = this.utilsService.range(1, this.pagesCount)
    }
}